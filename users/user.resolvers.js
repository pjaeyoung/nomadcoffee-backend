import client from "../client";

export default {
  User: {
    totalFollowing: ({ id }) =>
      client.user.count({
        where: {
          followers: { some: { id } },
        },
      }),
    totalFollowers: ({ id }) =>
      client.user.count({
        where: {
          following: { some: { id } },
        },
      }),
    isMe: ({ id }, _, { user }) => id === user.id,
    isFollowing: async ({ id }, _, { user }) => {
      if (!user) {
        return false;
      }

      const exists = await client.user.count({
        where: {
          id: user.id,
          following: {
            some: {
              id,
            },
          },
        },
      });

      return !!exists;
    },
  },
};

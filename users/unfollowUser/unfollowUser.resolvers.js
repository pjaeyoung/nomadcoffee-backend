import client from "../../client";

export default {
  Mutation: {
    unfollowUser: async (_, { username }, { user, protectResolver }) => {
      try {
        protectResolver(user);

        const followingUser = await client.user.findUnique({
          where: { username },
        });
        if (!followingUser) {
          throw Error(`${username} does not exists`);
        }

        await client.user.update({
          where: { id: user.id },
          data: {
            following: {
              disconnect: {
                username,
              },
            },
          },
        });

        return {
          ok: true,
        };
      } catch (error) {
        return {
          ok: false,
          error: error?.message ?? `can't unfollow ${username}`,
        };
      }
    },
  },
};

import client from "../../client";

export default {
  Query: {
    seeUser: async (_, { username, page }) => {
      try {
        const user = await client.user.findUnique({
          where: { username },
          select: { id: true },
        });
        if (!user) {
          throw Error(`${username} does not exists`);
        }

        const followers = await client.user
          .findUnique({ where: { username } })
          .followers({ skip: (page - 1) * 5, take: 5 });
        const following = await client.user
          .findUnique({ where: { username } })
          .following({ skip: (page - 1) * 5, take: 5 });

        const totalFollowers = await client.user.count({
          where: {
            following: { some: { username } },
          },
        });

        const totalFollowing = await client.user.count({
          where: {
            followers: { some: { username } },
          },
        });

        return {
          ok: true,
          followers,
          following,
          totalFollowers,
          totalFollowing,
          totalFollowersPage: Math.ceil(totalFollowers / 5),
          totalFollowingPage: Math.ceil(totalFollowing / 5),
        };
      } catch (error) {
        return {
          ok: false,
          error: error?.message ?? `can't see ${username}`,
        };
      }
    },
  },
};

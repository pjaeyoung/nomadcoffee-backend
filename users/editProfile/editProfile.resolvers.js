import bycript from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    editProfile: async (
      _,
      { email, username, githubUsername, password: _password, avatarURL },
      { user, protectResolver }
    ) => {
      try {
        protectResolver(user);
        const password = _password && (await bycript.hash(_password, 10));
        await client.user.update({
          where: { id: user.id },
          data: {
            email,
            username,
            githubUsername,
            password,
            avatarURL,
          },
        });

        return {
          ok: true,
        };
      } catch (error) {
        return {
          ok: false,
          error: error?.message ?? "Could not update profile",
        };
      }
    },
  },
};

import bycript from "bcrypt";
import client from "../client";

export default {
  Mutation: {
    createAccount: async (
      _,
      { name, password, email, username, location, avatarUrl, githubUsername }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }],
          },
        });

        if (existingUser) {
          throw { message: "This username/email is already taken." };
        }

        const uglyPassword = await bycript.hash(password, 10);
        await client.user.create({
          data: {
            name,
            password: uglyPassword,
            email,
            username,
            location,
            avatarUrl,
            githubUsername,
          },
        });

        return {
          ok: true,
        };
      } catch (error) {
        console.log(error);
        return {
          ok: false,
          error: error?.message ?? "create account failed",
        };
      }
    },
  },
};

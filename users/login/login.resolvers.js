import bycript from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../../client";

export default {
  Mutation: {
    login: async (_, { username, password }) => {
      try {
        const user = await client.user.findFirst({ where: { username } });

        if (!user) {
          throw Error("User not found");
        }
        const passwordOk = await bycript.compare(password, user.password);
        if (!passwordOk) {
          throw Error("Incorrect password");
        }

        const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);

        return {
          ok: true,
          token,
        };
      } catch (error) {
        return {
          ok: false,
          error: error?.message ?? "login failed",
        };
      }
    },
  },
};

require("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from "./schema";
import { getUser, protectResolver } from "./users/users.utiles";

const server = new ApolloServer({
  schema,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization),
    protectResolver,
  }),
});

const PORT = process.env.PORT;

server.listen(PORT).then(() => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

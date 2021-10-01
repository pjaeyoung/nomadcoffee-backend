import { gql } from "apollo-server";

export default gql`
  type CreateAccountReturn {
    ok: Boolean!
    error: String
  }

  type Mutation {
    createAccount(
      name: String!
      email: String!
      password: String!
      username: String!
      location: String
      avatarURL: String
      githubUsername: String
    ): CreateAccountReturn
  }
`;

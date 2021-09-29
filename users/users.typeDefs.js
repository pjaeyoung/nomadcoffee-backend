import { gql } from "apollo-server-core";

export default gql`
  type User {
    id: String!
    username: String!
    email: String!
    name: String!
    password: String!
    location: String
    avatarUrl: String
    githubUsername: String
    createdAt: String!
    updatedAt: String!
  }

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
      avatarUrl: String
      githubUsername: String
    ): CreateAccountReturn
  }

  type Query {
    seeProfile(username: String): User
  }
`;

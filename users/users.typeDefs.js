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
`;

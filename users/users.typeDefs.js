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
    following: [User]
    followers: [User]
    totalFollowing: Int!
    totalFollowers: Int!
    isFollowing: Boolean!
    isMe: Boolean!
    createdAt: String!
    updatedAt: String!
  }
`;

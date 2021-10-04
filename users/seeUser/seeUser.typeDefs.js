import { gql } from "apollo-server";

export default gql`
  type SeeUserResult {
    ok: Boolean!
    error: String
    followers: [User]
    following: [User]
    totalFollowers: Int
    totalFollowing: Int
    totalFollowersPage: Int
    totalFollowingPage: Int
  }

  type Query {
    seeUser(username: String!, page: Int!): SeeUserResult
  }
`;

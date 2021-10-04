import { gql } from "apollo-server";

export default gql`
  type UnfollowUserReturn {
    ok: Boolean!
    error: String
  }

  type Mutation {
    unfollowUser(username: String): UnfollowUserReturn
  }
`;

import { gql } from "apollo-server";

export default gql`
  type FollowUserReturn {
    ok: Boolean!
    error: String
  }

  type Mutation {
    followUser(username: String): FollowUserReturn
  }
`;

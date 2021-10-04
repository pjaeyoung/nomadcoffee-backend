import { gql } from "apollo-server";

export default gql`
  type Query {
    searchUsers(keyword: String!, cursor: Int): [User]
  }
`;

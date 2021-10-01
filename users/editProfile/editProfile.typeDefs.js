import { gql } from "apollo-server";

export default gql`
  type EditProfileReturn {
    ok: Boolean!
    error: String
  }

  type Mutation {
    editProfile(
      email: String
      githubUsername: String
      username: String
      password: String
      avatarURL: String
    ): EditProfileReturn
  }
`;

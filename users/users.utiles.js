import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (token) => {
  try {
    if (!token) throw Error;
    const { id } = await jwt.verify(token, process.env.SECRET_KEY);
    const user = await client.user.findUnique({
      where: { id },
      rejectOnNotFound: true,
    });
    return user;
  } catch {
    return null;
  }
};

export const protectResolver = (user) => {
  if (!user) {
    throw Error("You need to login");
  }
};

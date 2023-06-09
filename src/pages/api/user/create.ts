import { prisma } from "@/db";
import { hashPassword } from "@/password";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  const { username, password }: { username: string; password: string } = body;

  if (method !== "POST")
    return res.status(400).json({
      message: `Method ${method} not allowed use POST`,
    });

  if (!username || !password)
    return res.status(400).json({
      message: "Fields data not provided ",
      username: `This is what we got ${username}`,
      password: `This is what we got ${password}`,
    });

  if (username.length < 10 || password.length < 10)
    return res.status(400).json({
      message:
        "username or password is to short must be at least 10 characters long",
      username: `This is what we got ${username}`,
      password: `This is what we got ${password}`,
    });

  const _user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });

  if (_user)
    return res.status(400).json({
      message: `Username: ${username} already is use`,
    });

  const _password = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      username: username,
      password: _password,
    },
  });

  res.status(200).json({
    message: "User created",
  });
}

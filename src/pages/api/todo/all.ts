import { prisma } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method !== "GET")
    return res.status(400).json({
      message: `Method ${method} not allowed use GET`,
    });

  const allTodo = await prisma.todo.findMany();

  res.status(200).json(allTodo);
}

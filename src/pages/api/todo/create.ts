import { prisma } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  const { content }: { content: string } = body;

  if (method !== "POST")
    return res.status(400).json({
      message: `Method ${method} not allowed use POST`,
    });

  if (!content)
    return res.status(400).json({
      message: "Fields data not provided ",
      content: `This is what we got ${content}`,
    });

  if (content.length < 1)
    return res.status(400).json({
      message: "Content length must be over one character",
      content: `This is what we got ${content}`,
    });

  const todo = await prisma.todo.create({
    data: {
      content: content,
    },
  });

  res.status(200).json({
    message: "Todo crated successfully",
    todo: todo,
  });
}

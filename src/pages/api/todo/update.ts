import { prisma } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  try {
    const { body } = req;
    const { id, content } = body;

    const updatedTodo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        content,
      },
    });

    res.status(200).json({
      message: "Todo updated successfully",
      updatedTodo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

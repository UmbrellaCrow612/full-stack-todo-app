import { prisma } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id }: any = req.query;
  const _todo = await prisma.todo.delete({
    where: {
      id: id,
    },
  });

  res.status(200).json(_todo);
}

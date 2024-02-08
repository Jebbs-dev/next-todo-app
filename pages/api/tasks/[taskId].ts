import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import sessionAuth from "@/lib/sessionAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    await sessionAuth(req);

    const { taskId } = req.query;

    if (typeof taskId !== "string") {
      throw new Error("Invalid task request");
    }

    if (!taskId) {
      throw new Error("Invalid task request");
    }

    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });

    if (!task) {
      throw new Error("Invalid task request");
    }

    return res.status(200).json(task);
    
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}

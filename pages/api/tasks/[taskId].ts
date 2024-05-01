import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import sessionAuth from "@/lib/sessionAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET" && req.method !== "PATCH") {
    return res.status(405).end();
  }

  try {
    if(req.method === "GET") {
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
  }

  if(req.method === "PATCH"){
    const { taskId } = req.query;
    const { title } = req.body;
    
    if (typeof taskId !== "string") {
      throw new Error("Invalid task request");
    }

    if (!taskId) {
      throw new Error("Invalid task request");
    }

    const updatedTask = await prisma.task.update({
      where: {
        id: taskId
      },
      data: {
        title
      }
    })

    return res.status(200).json(updatedTask);
  }

  
  
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}

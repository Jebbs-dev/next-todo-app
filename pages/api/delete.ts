import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb"

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try {
    if(req.method === "DELETE"){
      const { taskId } = req.body;

      const existingTask = await prisma.task.findUnique({
        where: {
          id: taskId
        }
      })

      if(!existingTask){
        throw new Error("Task not found");  
      }

      const deletedTask = await prisma.task.delete({
        where: {
          id: taskId
        },
      })

      return res.status(200).json(deletedTask);
    }

  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
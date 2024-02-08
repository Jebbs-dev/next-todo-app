import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb"


export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try {
    if(req.method === "PATCH"){
      const { taskId } = req.body;

      const existingTask = await prisma.task.findUnique({
        where: {
          id: taskId
        }
      })

      if(!existingTask){
        throw new Error("Task not found");  
      }

      const updatedTask = await prisma.task.update({
        where: {
          id: taskId
        },
        data: {
          isCompleted:!existingTask.isCompleted,
          status: existingTask.isCompleted ? "unchecked" : "checked",
        }
      })

      return res.status(200).json(updatedTask);
    }


  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb"
import sessionAuth from "@/lib/sessionAuth";
import { without } from "lodash";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try {
    if(req.method === "POST"){
      const { currentUser } = await sessionAuth(req);
      const { taskId } = req.body;

      const existingTask = await prisma.task.findUnique({
        where: {
          id: taskId
        }
      })

      if(!existingTask){
        throw new Error("Task not found");  
      }

      const user = await prisma.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          completedTaskIds: {
            push: taskId
          }
        }
      })

      return res.status(200).json(user);
    }

    if(req.method === "DELETE"){
      const {currentUser} = await sessionAuth(req);

      const { taskId } = req.body;

      const existingTask = await prisma.task.findUnique({
        where: {
          id: taskId
        }
      })

      if(!existingTask){
        throw new Error("Task not found!")
      }

      const updatedCompletedTaskIds = without(currentUser.completedTaskIds, taskId)

      const updatedUser = await prisma.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          completedTaskIds: updatedCompletedTaskIds,
        }
      })

      return res.status(200).json(updatedUser);
    }


  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
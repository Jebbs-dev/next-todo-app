import sessionAuth from "@/lib/sessionAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== "GET"){
    return res.status(405).end();
  }

  try {
    
    const { currentUser } = await sessionAuth(req);

    const completedTasks = await prisma.task.findMany({
      where: {
        id: {
          in: currentUser?.completedTaskIds
        }
      }
    })

    return res.status(200).json(completedTasks);

  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }

}
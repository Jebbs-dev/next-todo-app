import sessionAuth from "@/lib/sessionAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== "GET"){
    return res.status(405).end();
  }

  try {
    const completedTasks = await prisma.task.findMany({
      where: {
        isCompleted: true
      }
    })

    return res.status(200).json(completedTasks);

  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }

}
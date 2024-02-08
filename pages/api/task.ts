import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb"

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== "POST"){
    return res.status(405).end();
  }

  try {
    const { title, status, isCompleted } = req.body;

    const newTask = await prisma.task.create({
      data: {
        title,
        status,
        isCompleted
      }
    })

    return res.status(200).json(newTask);

  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
} 
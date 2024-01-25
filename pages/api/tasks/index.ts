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
    await sessionAuth(req)

    const tasks = await prisma.task.findMany()

    return res.status(200).json(tasks);

  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}

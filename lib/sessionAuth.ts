import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import prisma from "@/lib/prismadb"

const sessionAuth = async (req: NextApiRequest) => {
  const secret = process.env.NEXTAUTH_JWT_SECRET;
  const token = await getToken({ req, secret });

  if (!token?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: token?.email,
    },
  })

  if (!currentUser) {
    throw new Error("Not signed in");
  }

  return { currentUser };
};

export default sessionAuth;

import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res
      .status(401)
      .json({ message: "Please sign in to create a post." });
  }

  const { user } = session;
  const { content } = req.body;
  // Get user from database
  const prismaUser = await prisma.user.findUnique({
    where: { email: session?.user?.email || undefined },
  });

  // Create post
  try {
    const body = req.body;

    const result = await prisma.post.create({
      data: {
        content: content as string,
        userId: prismaUser?.id as string,
      },
    });

    return res.json(result);
  } catch (err) {
    // console.log(err);
    res.status(402).json({ err: "Error has occured while making a post" });
  }
}

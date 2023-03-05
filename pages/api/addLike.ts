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

  const { postId } = req.body;
  // Get user from database
  const prismaUser = await prisma.user.findUnique({
    where: { email: session?.user?.email || undefined },
  });

  // Check if user has already liked the post
  const alreadyLiked = await prisma.like.findFirst({
    where: {
      postId: postId as string,
      userId: prismaUser?.id as string,
    },
  });

  // Create like
  try {
    if (!alreadyLiked) {
      // Create like if user has not liked the post
      const result = await prisma.like.create({
        data: {
          postId: postId as string,
          userId: prismaUser?.id as string,
        },
      });

      return res.status(200).json(result);
    } else {
      // Delete like if user has already liked the post
      const result = await prisma.like.delete({
        where: {
          id: alreadyLiked.id,
        },
      });

      return res.status(201).json(result);
    }
  } catch (err) {
    // console.log(err);
    res
      .status(402)
      .json({ err: "Error has occured while trying to like post" });
  }
}

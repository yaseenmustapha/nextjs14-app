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
      .json({ message: "Please sign in to delete a post." });
  }

  const { user } = session;
  const { postId } = req.body;

  // Create post
  try {
    const post = await prisma.post.findUnique({
      where: { id: postId as string },
      select: { userId: true },
    });
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }
    if (post.userId !== user.id) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    const result = await prisma.post.delete({
      where: {
        id: postId as string,
      },
    });

    return res.json(result);
  } catch (err) {
    // console.log(err);
    res.status(402).json({ err: "Error has occured while deleting a post" });
  }
}

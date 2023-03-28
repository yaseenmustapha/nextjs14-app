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
      .json({ message: "Please sign in to delete a comment." });
  }

  const { user } = session;
  const { commentId } = req.body;

  try {
    const comment = await prisma.comment.findUnique({
      where: { id: commentId as string },
      select: { userId: true },
    });
    if (!comment) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }
    if (comment.userId !== user.id) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    const result = await prisma.comment.delete({
      where: {
        id: commentId as string,
      },
    });

    return res.json(result);
  } catch (err) {
    // console.log(err);
    res.status(402).json({ err: "Error has occured while deleting a comment" });
  }
}

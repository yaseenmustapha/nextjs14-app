import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = req.query.userId;
  const user = await prisma.user.findUnique({
    where: { id: userId as string },
  });

  // Return user data, including the subscription status, in the response
  res.status(200).json({
    id: user?.id,
    email: user?.email,
    subscriptionStatus: user?.subscriptionStatus || "none",
  });
}

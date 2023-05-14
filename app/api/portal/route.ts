import prisma from "@/lib/prisma";
import stripe from "@/lib/stripe";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const { user } = session || {};

  try {
    const dbUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (!dbUser) {
      throw new Error("User not found in database");
    }
    if (!dbUser.stripeCustomerId) {
      throw new Error("User does not have a Stripe customer ID");
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: dbUser.stripeCustomerId,
      return_url: `${process.env.BASE_URL}/subscribe`,
    });

    return NextResponse.redirect(session.url as string, { status: 303 });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

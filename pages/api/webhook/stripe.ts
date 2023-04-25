import Stripe from "stripe";
import stripe from "@/lib/stripe";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import getRawBody from "raw-body";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawBody = await getRawBody(req);
  const signature = req.headers["stripe-signature"] as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (error) {
    console.log(error);
    return res.status(400).send("Webhook signature verification failed.");
  }

  const stripeSession = event.data.object as Stripe.Checkout.Session;

  console.log(
    "stripeSessionClientReferenceId",
    stripeSession.client_reference_id
  );

  // Sent when a customer clicks the Pay or Subscribe button in Checkout, informing you of a new purchase.
  if (event.type === "checkout.session.completed") {
    // Retrieve the subscription details from Stripe.
    const subscription = await stripe.subscriptions.retrieve(
      stripeSession.subscription as string
    );

    // Update the user stripe into in our database.
    // Since this is the initial subscription, we need to update
    // the subscription id and customer id.
    await prisma.user.update({
      where: {
        id: stripeSession?.client_reference_id ?? "",
      },
      data: {
        subscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        subscriptionStatus: subscription.status,
      },
    });
  }

  // Sent each billing interval when a payment succeeds.
  if (event.type === "invoice.paid") {
    // Retrieve the subscription details from Stripe.
    const subscription = await stripe.subscriptions.retrieve(
      stripeSession.subscription as string
    );

    await prisma.user.update({
      where: {
        subscriptionId: subscription.id,
      },
      data: {
        subscriptionStatus: subscription.status,
      },
    });
  }

  // Sent each billing interval if there is an issue with your customer’s payment method.
  if (event.type === "invoice.payment_failed") {
    // Retrieve the subscription details from Stripe.
    const subscription = await stripe.subscriptions.retrieve(
      stripeSession.subscription as string
    );

    await prisma.user.update({
      where: {
        subscriptionId: subscription.id,
      },
      data: {
        subscriptionStatus: subscription.status,
      },
    });
  }

  return res.status(200).end();
}

"use client";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function Subscribe() {
  const { data: session } = useSession();
  const { user } = session || {};
  const isSubscribed = user?.subscriptionStatus === "active" || false;

  return (
    <main>
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-20 max-w-6xl mt-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-red-600 via-yellow-600 to-yellow-600 to-50% text-transparent bg-clip-text">
          Subscribe
        </h1>

        {isSubscribed ? (
          <>
            <h2 className="text-4xl mt-4">You are already subscribed.</h2>
            <div className="mt-4">
              <form action="/api/portal" method="POST">
                <Button
                  type="submit"
                  color="primary"
                  radius="full"
                  variant="flat"
                >
                  Manage Subscription
                </Button>
              </form>
            </div>
          </>
        ) : (
          <Card
            isFooterBlurred
            className="w-full h-[400px] col-span-12 sm:col-span-7 mt-8"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Pro Plan
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Get unlimited posts and comments
              </h4>
              <h4 className="text-white/90 font-medium text-xl">
                PRO badge on your profile
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              src="https://images.pexels.com/photos/3975590/pexels-photo-3975590.jpeg"
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Available now.</p>
                  <p className="text-tiny text-white/60">
                    Use card 4242 4242 4242 4242 to test.
                  </p>
                </div>
              </div>
              <form action="/api/stripe" method="POST">
                <Button
                  radius="full"
                  variant="flat"
                  className="text-teal-200 bg-teal-400 bg-opacity-30"
                  type="submit"
                  isDisabled={isSubscribed || !session}
                >
                  <span className="text-sm font-semibold uppercase">
                    {session ? "Subscribe Now" : "Sign in to Subscribe"}
                  </span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        )}
      </div>
    </main>
  );
}

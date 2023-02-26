"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar, Button, Navbar, Text } from "@nextui-org/react";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Nav() {
  const { data: session } = useSession();
  const { user } = session || {};
  const segment = useSelectedLayoutSegment();

  return (
    <Navbar isBordered>
      <Navbar.Brand>
        <Image src={"/next-logo.svg"} alt="Logo" width={30} height={30} />
        <Text b color="inherit" hideIn="xs" style={{ paddingLeft: 10 }}>
          Next.js 13 Demo App
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link isActive={!segment} href="/">
          Home
        </Navbar.Link>
        <Navbar.Link isActive={segment === "posts"} href="/posts">
          Feed
        </Navbar.Link>
        <Navbar.Link isActive={segment === "subscribe"} href="/subscribe">
          Subscribe
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        {session ? (
          <>
            {user?.image ? (
              <Avatar src={user.image as string} zoomed />
            ) : (
              <Avatar text={user?.name?.charAt(0) as string} zoomed />
            )}
            <Navbar.Link color="inherit" onClick={() => signOut()}>
              Sign out
            </Navbar.Link>
          </>
        ) : (
          <Navbar.Item>
            <Button auto flat onClick={() => signIn()}>
              Login
            </Button>
          </Navbar.Item>
        )}
      </Navbar.Content>
    </Navbar>
  );
}

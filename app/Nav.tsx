"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Avatar,
  Badge,
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Spinner,
  Switch,
} from "@nextui-org/react";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";

const SunIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

const MoonIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export default function Nav() {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const isSubscribed = user?.subscriptionStatus === "active" || false;
  const segment = useSelectedLayoutSegment();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="mt-2">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <svg viewBox="0 0 24 24" style={{ height: 32 }}>
            <path
              d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
              fill={theme === "dark" ? "#FFFFFF" : "#100F13"}
            />
          </svg>
          <p className="font-bold text-inherit hidden sm:flex pl-4">
            Next.js 14 Showcase
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem isActive={segment === "(home)"}>
          <Link
            color={segment === "(home)" ? undefined : "foreground"}
            href="/"
            as={NextLink}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={segment === "posts"}>
          <Link
            color={segment === "posts" ? undefined : "foreground"}
            href="/posts"
            as={NextLink}
          >
            Feed
          </Link>
        </NavbarItem>
        <NavbarItem isActive={segment === "subscribe"}>
          <Link
            color={segment === "subscribe" ? undefined : "foreground"}
            href="/subscribe"
            as={NextLink}
          >
            Subscribe
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Switch
          isSelected={theme === "dark"}
          onChange={(e) => setTheme(theme === "dark" ? "light" : "dark")}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <MoonIcon className={className} />
            ) : (
              <SunIcon className={className} />
            )
          }
        />
        {session ? (
          <>
            {isSubscribed ? (
              <Badge
                disableOutline
                content="PRO"
                size="md"
                color="primary"
                className="font-bold text-xs py-1 px-2"
              >
                {user?.image ? (
                  <Avatar src={user.image as string} />
                ) : (
                  <Avatar name={user?.name?.charAt(0) as string} />
                )}
              </Badge>
            ) : user?.image ? (
              <Avatar src={user.image as string} />
            ) : (
              <Avatar name={user?.name?.charAt(0) as string} />
            )}
            <Button variant="light" onClick={() => signOut()}>
              Sign out
            </Button>
          </>
        ) : (
          <NavbarItem>
            <Button variant="flat" onClick={() => signIn()} color="primary">
              {status && status === "loading" ? (
                <Spinner color="primary" size="sm" />
              ) : (
                "Login"
              )}
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            style={{
              minWidth: "100%",
              color: "inherit",
              fontWeight: segment === "(home)" ? "bold" : "normal",
            }}
            href="/"
            as={NextLink}
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            style={{
              minWidth: "100%",
              color: "inherit",
              fontWeight: segment === "posts" ? "bold" : "normal",
            }}
            href="/posts"
            as={NextLink}
          >
            Feed
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            style={{
              minWidth: "100%",
              color: "inherit",
              fontWeight: segment === "subscribe" ? "bold" : "normal",
            }}
            href="/subscribe"
            as={NextLink}
          >
            Subscribe
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

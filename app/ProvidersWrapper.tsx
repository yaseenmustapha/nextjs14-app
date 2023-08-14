"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <NextThemesProvider defaultTheme="system" attribute="class">
        <NextUIProvider>{children}</NextUIProvider>
      </NextThemesProvider>
    </SessionProvider>
  );
}

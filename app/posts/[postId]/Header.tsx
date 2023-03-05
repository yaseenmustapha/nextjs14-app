"use client";
import { Text } from "@nextui-org/react";

export default function Header() {
  return (
    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $pink600 -20%, $blue600 50%",
      }}
      weight="bold"
    >
      Thread
    </Text>
  );
}

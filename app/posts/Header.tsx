"use client";
import { Text } from "@nextui-org/react";

export default function Header() {
  return (
    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $purple600 -20%, $pink600 100%",
      }}
      weight="bold"
    >
      Feed
    </Text>
  );
}

"use client";
import {
  Container,
  Text,
} from "@nextui-org/react";

export default function Success() {
  return (
    <main>
      <Container>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $red600 -20%, $yellow600 50%",
          }}
          weight="bold"
        >
          Success!
        </Text>
        <Text>
          You have successfully subscribed to the Pro Plan.
        </Text>
      </Container>
    </main>
  );
}

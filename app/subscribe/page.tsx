"use client";
import { Container, Text } from "@nextui-org/react";

export default function Subscribe() {
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
          Subscribe
        </Text>
        <Text>
          Stripe payments under construction. Please check back later.
        </Text>
      </Container>
    </main>
  );
}

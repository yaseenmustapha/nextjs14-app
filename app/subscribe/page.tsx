"use client";
import { Button, Card, Col, Container, Row, Spacer, Text } from "@nextui-org/react";

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

        <Spacer y={2} />

        <Card css={{ w: "100%", h: "400px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#E8E8E7"
              >
                Pro Plan
              </Text>
              <Text h3 color="white">
                Get unlimited posts and comments
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://images.pexels.com/photos/3975590/pexels-photo-3975590.jpeg"
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Text color="#d1d1d1" size={12}>
                      Available soon.
                    </Text>
                    <Text color="#d1d1d1" size={12}>
                      Development in progress.
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button
                    flat
                    auto
                    rounded
                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Subscribe Now
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Container>
    </main>
  );
}

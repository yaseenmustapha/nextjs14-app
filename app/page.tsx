"use client";
import { Card, Grid, Text } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>

      <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
          <Card>
            <Card.Body>
              <Text>Next.js 13</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card>
            <Card.Body>
              <Text>React 18</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card>
            <Card.Body>
              <Text>Database</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card>
            <Card.Body>
              <Text>UI Components</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card>
            <Card.Body>
              <Text>Authentication</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card>
            <Card.Body>
              <Text>Subscriptions</Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </main>
  );
}

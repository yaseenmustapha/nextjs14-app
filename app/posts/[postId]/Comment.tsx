"use client";
import { formatDate } from "@/lib/utils";
import { Avatar, Card, Grid, Spacer, Text } from "@nextui-org/react";

export default function Comment({
  id,
  name,
  avatar,
  createdAt,
  content,
}: {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
  content: string;
}) {
  return (
    <>
      <Card
        css={{ paddingLeft: 6, paddingTop: 6, paddingBottom: 6 }}
        variant="bordered"
      >
        <Card.Header>
          <Avatar src={avatar} />
          <Spacer x={0.5} />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text b>{name}</Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>{formatDate(createdAt)}</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body>
          <Text>{content}</Text>
        </Card.Body>
      </Card>
      <Spacer y={1} />
    </>
  );
}

"use client";
import { formatDate } from "@/lib/utils";
import { Avatar, Card, Grid, Spacer, Text } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function Comment({
  userId,
  id,
  name,
  avatar,
  createdAt,
  content,
}: {
  userId: string;
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
  content: string;
}) {
  const { data: session } = useSession();
  const { user } = session || {};
  return (
    <>
      <Card
        css={{ paddingLeft: 6, paddingTop: 6, paddingBottom: 6 }}
        variant="bordered"
      >
        <Card.Header>
          <Avatar
            src={avatar}
            color="gradient"
            bordered={userId === user?.id}
          />
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

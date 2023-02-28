"use client";
import { Avatar, Card, Spacer, Text } from "@nextui-org/react";
import Link from "next/link";

export default function Post({
  id,
  name,
  avatar,
  content,
  comments,
}: {
  id: string;
  name: string;
  avatar: string;
  content: string;
  comments: [];
}) {
  return (
    <><Card css={{ paddingLeft: 6, paddingTop: 6, paddingBottom: 6 }} variant="bordered">
      <Card.Header>
        <Avatar src={avatar} />
        <Spacer x={0.5} />
        <Text b>{name}</Text>
      </Card.Header>
      <Card.Body>
        <Text>{content}</Text>
      </Card.Body>
    </Card><Spacer y={1} /></>
  );
}

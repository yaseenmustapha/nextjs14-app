"use client";
import { useSession } from "next-auth/react";
import { formatDate } from "@/lib/utils";
import { Avatar, Card, Grid, Loading, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeartIcon = ({ fill, onClick }: { fill: boolean; onClick: Function }) => {
  const [hover, setHover] = useState(false);
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={fill ? "#F31260" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClick()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <path
        d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
        stroke={fill || hover ? "#F31260" : "#9ba1a6"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function Post({
  id,
  name,
  avatar,
  createdAt,
  content,
  likes,
  comments,
}: {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
  content: string;
  likes: { id: string; postId: string; userId: string }[];
  comments: [];
}) {
  const { data: session } = useSession();
  const { user } = session || {};
  const currentUserLiked = session && likes.some((like) => like.userId === user?.id) || false;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const addLike = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/addLike", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: id,
        }),
      });
      if (res.ok) {
        router.refresh();
      }
    } catch {
      // console.log("Error liking post");
    }
    setLoading(false);
  };

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
        <Card.Footer>
          <Text css={{ color: "$accents8" }}>{comments.length} comments</Text>
          <Spacer x={0.5} />
          {loading ? (
            <Loading size="sm" color="error" />
          ) : (
            <HeartIcon
              fill={currentUserLiked}
              onClick={() => session && addLike(id)}
            />
          )}
          <Spacer x={0.1} />
          <Text color={currentUserLiked ? "#F31260" : "#9ba1a6"}>
            {likes.length}
          </Text>
        </Card.Footer>
      </Card>
      <Spacer y={1} />
    </>
  );
}

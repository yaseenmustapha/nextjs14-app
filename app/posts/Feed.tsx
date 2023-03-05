"use client";
import { Container, Grid, Row, Spacer } from "@nextui-org/react";
import AddPost from "./AddPost";
import Header from "./Header";
import Post from "./Post";

export default function Feed({
  data,
}: {
  data: {
    id: string;
    content: string;
    user: { name: string; image: string };
    createdAt: string;
    likes: [];
    comments: [];
  }[];
}) {
  return (
    <main>
      <Container display="flex" alignItems="center" xs>
        <Spacer y={0.5} />
        <Row>
          <Header />
        </Row>
        <Row>
          <AddPost />
        </Row>

        {data?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            name={post.user.name}
            avatar={post.user.image}
            createdAt={post.createdAt}
            content={post.content}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </Container>
    </main>
  );
}

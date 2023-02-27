"use client";
import { Container } from "@nextui-org/react";
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
    comments: [];
  }[];
}) {
  return (
    <main>
      <Container>
        <Header />
        <AddPost />
        {data?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            name={post.user.name}
            avatar={post.user.image}
            content={post.content}
            comments={post.comments}
          />
        ))}
      </Container>
    </main>
  );
}

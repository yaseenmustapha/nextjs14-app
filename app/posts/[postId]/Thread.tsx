"use client";
import { Container, Row, Spacer } from "@nextui-org/react";
import Header from "./Header";
import Post from "../Post";
import Comment from "./Comment";
import AddComment from "./AddComment";

export default function Thread({
  post,
}: {
  post: {
    id: string;
    content: string;
    user: { id: string; name: string; image: string };
    createdAt: string;
    likes: [];
    comments: {
      id: string;
      user: { id: string; name: string; image: string };
      createdAt: string;
      content: string;
    }[];
  };
}) {
  return (
    <Container display="flex" alignItems="center" xs>
      <Spacer y={0.5} />
      <Row>
        <Header />
      </Row>
      <Post
        key={post.id}
        userId={post.user.id}
        id={post.id}
        name={post.user.name}
        avatar={post.user.image}
        createdAt={post.createdAt}
        content={post.content}
        likes={post.likes}
        comments={post.comments}
      />
      <AddComment postId={post.id} />
      {post.comments?.map((comment) => (
        <Comment
          key={comment.id}
          userId={comment.user.id}
          id={comment.id}
          name={comment.user.name}
          avatar={comment.user.image}
          createdAt={comment.createdAt}
          content={comment.content}
        />
      ))}
    </Container>
  );
}

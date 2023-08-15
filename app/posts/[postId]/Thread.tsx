"use client";
import { Spacer } from "@nextui-org/react";
import Header from "./Header";
import Post from "../Post";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { Comment as PrismaComment, Like, User } from "@prisma/client";

export default function Thread({
  post,
}: {
  post: {
    id: string;
    content: string;
    user: User;
    createdAt: string;
    likes: Like[];
    comments: {
      id: string;
      user: User;
      createdAt: string;
      content: string;
    }[];
  };
}) {
  return (
    <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-20 max-w-3xl mt-6 items-center">
      <Spacer y={0.5} />
      <Header />
      <Post
        key={post.id}
        userId={post.user.id}
        subscriptionStatus={post.user.subscriptionStatus}
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
          subscriptionStatus={comment.user.subscriptionStatus}
          id={comment.id}
          name={comment.user.name}
          avatar={comment.user.image}
          createdAt={comment.createdAt}
          content={comment.content}
        />
      ))}
    </div>
  );
}

"use client";
import { Spacer } from "@nextui-org/react";
import AddPost from "./AddPost";
import Header from "./Header";
import Post from "./Post";

export default function Feed({
  data,
}: {
  data: {
    id: string;
    content: string;
    user: {
      id: string;
      subscriptionStatus: string;
      name: string;
      image: string;
    };
    createdAt: string;
    likes: [];
    comments: [];
  }[];
}) {
  return (
    <main>
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-20 max-w-3xl mt-6 items-center">
        <Spacer y={0.5} />
        <Header />
        <AddPost />

        {data?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            userId={post.user.id}
            subscriptionStatus={post.user.subscriptionStatus}
            name={post.user.name}
            avatar={post.user.image}
            createdAt={post.createdAt}
            content={post.content}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
    </main>
  );
}

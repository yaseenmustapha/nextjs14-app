import { Comment, Like, User } from "@prisma/client";
import Thread from "./Thread";

async function getPost(postId: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/${postId}`, {
    cache: "no-store",
  });
  // console.log(res);
  return res.json();
}

export default async function PostDetails({
  params,
}: {
  params: { postId: string };
}) {
  const data: {
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
  } | null = await getPost(params.postId);

  if (data === null) {
    // Handle the case where data is null, such as showing an error message
    return (
      <div className="flex justify-center items-center mt-16">
        Post not found.
      </div>
    );
  }

  return <Thread post={data} />;
}

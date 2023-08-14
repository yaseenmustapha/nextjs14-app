import { getSinglePost } from "@/lib/posts";
import { Comment, Like, User } from "@prisma/client";
import Thread from "./Thread";

export default async function PostDetails({
  params,
}: {
  params: { postId: string };
}) {
  const data: {
    id: string;
    content: string;
    user: User;
    createdAt: Date;
    likes: Like[];
    comments: (Comment & { user: User })[];
  } | null = await getSinglePost(params.postId);

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

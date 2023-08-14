import { getAllPosts } from "@/lib/posts";
import { Like, Comment, User } from "@prisma/client";
import Feed from "./Feed";

export default async function Posts() {
  const data: {
    id: string;
    content: string;
    user: User;
    createdAt: Date;
    likes: Like[];
    comments: Comment[];
  }[] = await getAllPosts();
  // console.log(data);
  return (
    <main>
      <Feed posts={data} />
    </main>
  );
}

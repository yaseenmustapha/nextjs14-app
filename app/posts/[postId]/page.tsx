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
  const data = await getPost(params.postId);

  return <Thread post={data} />;
}

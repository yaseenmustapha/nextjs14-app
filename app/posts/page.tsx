import Feed from "./Feed";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`, {
    cache: "no-store",
  });
  // console.log(res);
  return res.json();
}

export default async function Posts() {
  const data: {
    id: string;
    content: string;
    user: { name: string; image: string };
    comments: [];
  }[] = await getPosts();
  // console.log(data);
  return (
    <main>
      <Feed data={data} />
    </main>
  );
}

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Posts() {
  const data: { id: number; title: string }[] = await getPosts();
  console.log(data);
  return (
    <main>
      <h1>Posts page</h1>
      {data.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </main>
  );
}

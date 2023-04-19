import HomePage from "./HomePage";

async function getStars() {
  const res = await fetch(
    "https://api.github.com/repos/yaseenmustapha/nextjs13-app",
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  return data.stargazers_count;
}

export default async function Home() {
  const githubStars = await getStars();

  return (
    <main>
      <HomePage numStars={githubStars} />
    </main>
  );
}

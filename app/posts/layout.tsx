export const metadata = {
  title: "Feed | Next.js 13 Demo App",
};

export default function SubscribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

import ProvidersWrapper from "./ProvidersWrapper";
import Nav from "./Nav";
import "./globals.css";

export const metadata = {
  title: "Next.js 14 Showcase",
  description: "Created by Yaseen Mustapha",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Server Components",
    "NextUI",
    "NextAuth",
    "Prisma",
    "PostgreSQL",
    "OpenAI",
    "GPT",
    "Stripe",
  ],
  authors: [
    {
      name: "Yaseen Mustapha",
      url: "https://github.com/yaseenmustapha",
    },
  ],
  creator: "Yaseen Mustapha",
  publisher: "Yaseen Mustapha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProvidersWrapper>
          <Nav />
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}

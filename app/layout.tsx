import ProvidersWrapper from "./ProvidersWrapper";
import Nav from "./Nav";

export const metadata = {
  title: "Next.js Demo App",
  description: "Created by Yaseen Mustapha",
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

import "./globals.css";
import PageRoot from "./PageRoot";
import StoreProvider from "./StoreProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Template",
  description: "Template",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <PageRoot>{children}</PageRoot>
        </body>
      </html>
    </StoreProvider>
  );
}

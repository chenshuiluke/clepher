import "./globals.css";
import StoreProvider from "./StoreProvider";
import { useAppSelector } from "@/lib/hooks/redux";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clepher",
  description: "Clepher",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}

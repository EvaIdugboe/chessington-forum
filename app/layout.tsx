import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chessington Industrial Estate Community Forum",
  description: "Landing page for the Chessington Industrial Estate Community Forum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

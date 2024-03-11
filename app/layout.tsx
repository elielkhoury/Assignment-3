import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Defining metadata for the application which can be used for SEO or other purposes.
export const metadata: Metadata = {
  title: "My Task Manager",
  description: "Add your daily tasks on the go!",
};

// Defining the RootLayout functional component. It wraps around the children components.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

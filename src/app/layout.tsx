import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Playground | Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`grid gap-16 ${inter.className}`}>
        <header className="p-4">
          <Logo />
        </header>
        <main className="min-h-screen">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}

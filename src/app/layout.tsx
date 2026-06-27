import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MD. Asaduzzaman Rokon - Portfolio",
  description: "Computer Science Undergraduate & Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-black text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

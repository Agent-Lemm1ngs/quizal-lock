import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quizal",
  description:
    "Enhance your academic performance, learning experience, and exam success with Quizal. Select from a variety of engaging gamemodes designed to boost your preparation and excel in your exams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

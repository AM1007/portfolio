import { Inter } from "next/font/google";
import "./globals.css";
import RootLayout from "@/components/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "blog_app",
    default: "Personal Blog - A feature to make you famous",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}

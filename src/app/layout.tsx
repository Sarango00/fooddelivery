import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Provider } from "@/components";
import { ToastContainer } from "react-toastify";

// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ position: "relative" }}>
        <Provider>{children}</Provider>
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}

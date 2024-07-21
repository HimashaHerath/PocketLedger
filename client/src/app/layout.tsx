import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/NavBar";
import "./globals.css";
// import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SafePass",
  description: "Secure your digital life with SafePass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
          <Navbar />
          {children}
          {/* <Toaster /> */}
      </body>
    </html>
  );
}
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Footer";
import NextTheme from "@/Providers/NextTheme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rentify - a car rent platform",
  description:
    "Great choice — Rentify sounds modern, simple, and startup-friendly",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextTheme>
          <Navbar> </Navbar>
          {children}
          <Toaster />
          <Footer></Footer>
        </NextTheme>
      </body>
    </html>
  );
}

"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import { useEffect, useState } from "react";
import { metadata } from "./metadata"; // Import the metadata

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={`${inter.className} ${isDark ? "darkMode" : ""}`}>
        <AnimatedBackground isDark={isDark}/>
        <Header isDark={isDark} setIsDark={setIsDark}/>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { MainWrapper } from "@/wrappers/MainWrapper";
import React from "react";

export const metadata: Metadata = {
  title: "Brian Adhitya",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll">
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { MainWrapper } from "@/wrappers/MainWrapper";
import React from "react";
import ActivePageContextProvider from "@/context/activePageContext";
import Starfield from "react-starfield";

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
        <Starfield
          starCount={2000}
          starColor={[255, 255, 255]}
          speedFactor={0.15}
        />
        <ActivePageContextProvider>
          <MainWrapper>{children}</MainWrapper>
        </ActivePageContextProvider>
      </body>
    </html>
  );
}

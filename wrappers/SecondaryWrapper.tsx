"use client";

import Navbar from "@/components/navbar";

interface PageWrapperProps {
  children: React.ReactNode;
}

export const SecondaryWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="flex flex-col items-center justify-center ml-5 py-10">
      <Navbar />
      {children}
    </div>
  );
};

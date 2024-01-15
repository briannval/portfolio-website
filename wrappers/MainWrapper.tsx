"use client";

interface PageWrapperProps {
  children: React.ReactNode;
}

export const MainWrapper = ({ children }: PageWrapperProps) => {
  return <div className="h-full w-full flex relative flex-col">{children}</div>;
};

"use client";

import { createContext, useContext, useState } from "react";
import { Page } from "./activePage";

interface ActivePageContextProviderProps {
  children: React.ReactNode;
}

// props for context
interface ActivePageContextType {
  activePage: Page | null;
  setActivePage: (page: Page) => void;
}

// set initially to null
const ActivePageContext = createContext<ActivePageContextType | null>(null);

// children of type ReactNode
export default function ActivePageContextProvider({
  children,
}: ActivePageContextProviderProps) {
  const [activePage, setActivePage] = useState<Page | null>(null);

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
}

// usage of context in components and page
export function useActivePageContext() {
  const context = useContext(ActivePageContext);

  if (!context) {
    throw new Error("Invalid context use");
  }

  return context;
}

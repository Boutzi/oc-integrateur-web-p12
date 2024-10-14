"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface StatusContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const StatusContext = createContext<StatusContextType | undefined>(undefined);

export const StatusProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState("");

  return (
    <StatusContext.Provider value={{ mode, setMode }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => {
  const context = useContext(StatusContext);
  if (!context) {
    throw new Error("useStatus must be used within a StatusProvider");
  }
  return context;
};

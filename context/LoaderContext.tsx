"use client";
import { ProgressBar } from "@/components/ProgressBar";
import { createContext, useContext, useState, ReactNode } from "react";

interface LoaderContextType {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const useLoader = (): LoaderContextType => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
};

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      <ProgressBar isLoading={isLoading} />
      {children}
    </LoaderContext.Provider>
  );
};

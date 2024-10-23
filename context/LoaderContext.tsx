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
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  const showLoader = () => {
    if (!hasLoaded) {
      setIsLoading(true);
    }
  };

  const hideLoader = () => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setHasLoaded(true);
    }, 2000);
    return () => clearTimeout(timeout);
  };

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {isLoading ? <ProgressBar onComplete={hideLoader} /> : children}
    </LoaderContext.Provider>
  );
};

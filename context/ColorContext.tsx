"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ColorContextType {
  color: string;
  setColor: (mode: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState<string>("violet-dark");

  useEffect(() => {
    const storedColor = localStorage.getItem("color");
    if (storedColor) {
      setColor(storedColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("color", color);
  }, [color]);

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};

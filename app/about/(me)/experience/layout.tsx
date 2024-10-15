import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Experience",
  description:
    "Discover my professional experiences and the projects I've contributed to.",
};

export default function AboutLayout({ children }: AboutLayoutProps) {
  return children;
}

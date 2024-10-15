import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Work",
  description:
    "View my portfolio of innovative projects and creative solutions.",
};

export default function AboutLayout({ children }: AboutLayoutProps) {
  return children;
}

import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Skills",
  description:
    "Check out the skills that define my coding prowess and creativity.",
};

export default function AboutLayout({ children }: AboutLayoutProps) {
  return children;
}

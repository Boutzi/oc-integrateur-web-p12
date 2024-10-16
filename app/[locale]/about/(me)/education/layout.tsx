import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Education",
  description: "Uncover my academic background and the knowledge I've gained.",
};

export default function AboutLayout({ children }: AboutLayoutProps) {
  return children;
}

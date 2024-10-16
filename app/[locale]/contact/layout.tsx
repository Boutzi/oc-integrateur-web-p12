import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Contact Me",
  description:
    "Get in touch with me for collaborations, inquiries, or just to say hello!",
};

export default function AboutLayout({ children }: AboutLayoutProps) {
  return children;
}

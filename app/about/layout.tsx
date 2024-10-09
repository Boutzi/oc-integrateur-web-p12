import { ReactNode } from "react";
import { AboutNav } from "../_components/AboutNav";
import { Section } from "../_components/Section";

interface AboutLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <Section className="flex min-h-[calc(100vh_-_theme(spacing.44))] gap-4 md:gap-8 py-8">
      <div className="grid w-full items-start md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <AboutNav />
        <main className="grid gap-6">{children}</main>
      </div>
    </Section>
  );
}

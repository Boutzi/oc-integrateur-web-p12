import { ReactNode } from "react";
import { AboutNav } from "@/components/AboutNav";
import { Section } from "@/components/Section";
import { Metadata } from "next";
import { getI18n } from "@/locales/server";

interface AboutLayoutProps {
  children: ReactNode;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: {
      default: t("layout.about"),
      template: "%s | Joe",
    },
    description: t("layout.aboutDescription"),
  };
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <Section className="flex min-h-[calc(100vh_-_theme(spacing.44))] gap-4 md:gap-8 py-8">
      <div className="grid w-full items-start md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] max-xl:flex max-xl:flex-col">
        <AboutNav />
        <main className="grid gap-6">{children}</main>
      </div>
    </Section>
  );
}

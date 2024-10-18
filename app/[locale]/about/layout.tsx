import { ReactNode } from "react";
import { AboutNav } from "@/components/AboutNav";
import { Section } from "@/components/Section";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface AboutLayoutProps {
  children: ReactNode;
}
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("layout.about"),
      template: "%s | Joe",
    },
    description: t("layout.aboutDescription"),
  };
}
interface AboutLayoutParams {
  params: {
    locale: string;
  };
}
export default function AboutLayout({
  children,
  params: { locale },
}: AboutLayoutProps & AboutLayoutParams) {
  unstable_setRequestLocale(locale);
  return (
    <Section className="flex min-h-[calc(100vh_-_theme(spacing.44))] gap-4 md:gap-8 py-8">
      <div className="grid w-full items-start md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] max-xl:flex max-xl:flex-col">
        <AboutNav />
        <main className="grid gap-6">{children}</main>
      </div>
    </Section>
  );
}

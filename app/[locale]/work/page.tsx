import { Section } from "@/components/Section";
import { WorkView } from "@/components/WorkView";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Work() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <Section>
      <main className="flex flex-col min-h-[calc(100vh_-_theme(spacing.52))] gap-4 md:gap-8 pt-8">
        <h1 className="text-5xl font-bold text-primary">Work</h1>
        <WorkView />
      </main>
    </Section>
  );
}

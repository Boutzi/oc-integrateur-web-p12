import { Section } from "@/components/Section";
import { WorkContainer } from "@/components/WorkContainer";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Work({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <Section>
      <main className="flex flex-col min-h-[calc(100vh_-_theme(spacing.52))] gap-4 md:gap-8 pt-8">
        <WorkContainer />
      </main>
    </Section>
  );
}

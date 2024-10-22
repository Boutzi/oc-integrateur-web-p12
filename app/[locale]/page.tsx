import { Contact } from "@/components/Contact";
import Hero from "@/components/Hero";
import { BestSkills } from "@/components/BestSkills";
import { Spacing } from "@/components/Spacing";
import { Status } from "@/components/Status";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <main className="">
      <div className="pt-28 pb-28 border-b max-md:pt-4 max-md:pb-16 relative group overflow-hidden">
        <Hero />
      </div>
      <div className="bg-gradient-to-t from-primary/0 via-primary/5 to-primary/20 pt-28 pb-28 max-sm:pt-16 max-sm:pb-16 border-b ">
        <Spacing size="md" />
        <Status />
        <Spacing size="md" />
      </div>
      {/* bg-grid-pattern bg-grid-size */}
      <div className="bg-secondary pt-28 pb-28 max-sm:pt-16 max-sm:pb-16 border-b">
        <Spacing size="md" />
        <BestSkills />
        <Spacing size="md" />
      </div>
      <div className="pt-28 pb-28 max-sm:pt-16 max-sm:pb-16">
        <Spacing size="md" />
        <Contact />
        <Spacing size="md" />
      </div>
      <Spacing size="md" />
    </main>
  );
}

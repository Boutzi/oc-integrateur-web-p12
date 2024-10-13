import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { BestSkills } from "@/components/BestSkills";
import { Spacing } from "@/components/Spacing";
import { Status } from "@/components/Status";

export default function Home() {
  return (
    <main className="">
      <div className="pt-28 pb-28 border-b max-md:pt-4 max-md:pb-16">
        <Hero />
      </div>
      <div className="bg-gradient-to-t from-violet-600/0 via-violet-600/5 to-violet-600/30 pt-28 pb-28 max-sm:pt-16 max-sm:pb-16 border-b ">
        <Spacing size="md" />
        <Status />
        <Spacing size="md" />
      </div>
      <div className="bg-violet-950 pt-28 pb-28 max-sm:pt-16 max-sm:pb-16 border-b bg-grid-pattern bg-grid-size">
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

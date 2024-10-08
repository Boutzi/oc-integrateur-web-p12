import { Contact } from "./_components/Contact";
import { Hero } from "./_components/Hero";
import { Skills } from "./_components/Skills";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";

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
        <Skills />
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

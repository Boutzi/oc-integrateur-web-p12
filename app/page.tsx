import { Contact } from "./_components/Contact";
import { Hero } from "./_components/Hero";
import { Skills } from "./_components/Skills";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";

export default function Home() {
  return (
    <main className="">
      <div className="p-28 border-b">
        <Hero />
      </div>
      <div className="bg-gradient-to-t from-violet-600/0 via-violet-600/0 to-violet-600/5 p-24 border-b ">
      <Status />
      </div>
      <div className="bg-violet-950 p-28 border-b bg-grid-pattern bg-grid-size">
      <Skills />
      </div>
      <div className="p-28">
      <Contact />
      </div>
      <Spacing size="md" />
    </main>
  );
}

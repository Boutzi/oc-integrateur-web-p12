"use client";
import { Section } from "@/components/Section";
import { WorkView } from "@/components/WorkView";

export default function Work() {
  return (
    <Section>
      <main className="flex flex-col min-h-[calc(100vh_-_theme(spacing.52))] gap-4 md:gap-8 pt-8">
        <h1 className="text-5xl font-bold text-primary">Work</h1>
        <WorkView />
      </main>
    </Section>
  );
}

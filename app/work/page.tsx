import { WorkList } from "../_components/WorkList";

export default function Work() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.44))] gap-4 md:gap-8 py-8">
      <WorkList />
    </main>
  );
}

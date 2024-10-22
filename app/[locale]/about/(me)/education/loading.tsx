import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-4xl font-semibold text-center"></h2>
      <div className="grid gap-4 grid-cols-2 max-lg:grid-cols-1">
        {Array.from({ length: 2 }).map((_, index) => (
          <Skeleton key={index} className="flex-1 h-48 rounded-lg" />
        ))}
      </div>

      <h2 className="text-4xl font-semibold text-center"></h2>
      <div className="grid gap-4 grid-cols-2 max-lg:grid-cols-1">
        {Array.from({ length: 2 }).map((_, index) => (
          <Skeleton key={index} className="flex-1 h-48 rounded-lg" />
        ))}
      </div>
    </section>
  );
}

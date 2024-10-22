import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="flex flex-col min-h-[calc(100vh_-_theme(spacing.52))] gap-4 md:gap-8 pt-8">
      <div className="w-full max-w-6xl mx-auto">
        <Skeleton className="h-10 w-1/2 mb-4 mx-auto" />
        <div className="flex flex-col gap-4">
          <Skeleton className="h-96 w-full rounded-lg" />
          <div className="relative">
            <Skeleton className="h-10 w-2/3 mx-auto" />
            <ul className="flex flex-wrap gap-2 justify-center my-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-6 w-24 rounded-full" />
              ))}
            </ul>
            <Skeleton className="h-96 w-[70%] mx-auto rounded-lg" />
            <Skeleton className="h-6 w-1/4 mx-auto mt-2" />
            <div className="absolute top-0 right-0">
              <Skeleton className="h-10 w-32 rounded-lg" />
            </div>
          </div>
          <div className="my-8 space-y-4 max-w-prose mx-auto">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-6 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

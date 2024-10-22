import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        <Skeleton className="w-1/2 h-8 mx-auto" />
      </h1>

      <div className="mb-4 flex flex-wrap gap-2 justify-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="w-24 h-10 rounded-md" />
        ))}
      </div>

      <div className="w-full flex h-10 justify-center mb-4">
        <Skeleton className="aspect-square rounded-full flex gap-1 bg-gray-300" />
      </div>

      <div className="grid gap-4 grid-cols-5 max-lg:grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2">
        {Array.from({ length: 40 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <Skeleton className="aspect-square w-28 h-28 mb-2 rounded-lg" />
            <Skeleton className="w-20 h-4 mb-2" />
            <div className="flex items-center gap-2 w-full">
              <Skeleton className="flex-1 h-4 rounded" />
              <Skeleton className="w-16 h-4 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

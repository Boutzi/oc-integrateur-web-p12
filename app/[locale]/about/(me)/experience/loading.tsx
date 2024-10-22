import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton
          key={index}
          className="w-full h-128 mx-auto flex p-8 gap-6 max-md:flex-col"
        />
      ))}
    </div>
  );
}

import { Section } from "@/components/Section";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-[calc(100vh_-_theme(spacing.44))] flex items-center">
      <Section className="flex flex-col items-start justify-between gap-4 max-lg:pt-8 max-lg:pb-8">
        <div className="m-auto mx-56 max-lg:mx-24 max-sm:mx-8">
          <Skeleton className="font-caption text-5xl font-bold text-primary max-md:text-4xl max-sm:text-3xl">
            Loading Title
          </Skeleton>
          <Skeleton className="font-caption font-extralight text-xl max-sm:text-xl">
            Loading Subtitle
          </Skeleton>
          <div className="flex flex-col gap-4 mt-8">
            {Array(2)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="flex gap-4 max-lg:flex-col">
                  <div className="flex flex-[2] flex-col gap-1">
                    <Skeleton className="text-xs">Loading Label</Skeleton>
                    <span className="text-primary ml-1 text-md">*</span>
                    <Skeleton className="flex-1 rounded-lg p-3 hover:bg-accent/20" />
                  </div>
                  <div className="flex flex-[2] flex-col gap-1">
                    <Skeleton className="text-xs">Loading Label</Skeleton>
                    <span className="text-primary ml-1 text-md">*</span>
                    <Skeleton className="flex-1 rounded-lg p-3 hover:bg-accent/20" />
                  </div>
                </div>
              ))}
            <div className="flex flex-[2] flex-col gap-1">
              <Skeleton className="text-xs">Loading Message</Skeleton>
              <span className="text-primary ml-1 text-md">*</span>
              <Skeleton className="flex-1 rounded-lg p-3 hover:bg-accent/20 resize-y min-h-[130px]" />
            </div>
            <div className="m-auto items-center mt-4">
              {/* Add any additional loading indicators here if needed */}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

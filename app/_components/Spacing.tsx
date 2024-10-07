import { cn } from "@/lib/utils";

export type SpacingProps = {
  size?: "sm" | "md" | "lg";
};

export const Spacing = ({ size = "md" }: SpacingProps) => {
  return (
    <div
      className={cn({
        "h-8 lg:h-8": size === "sm",
        "h-16 lg:h-16": size === "md",
        "h-32 lg:h-32": size === "lg",
      })}
    />
  );
};

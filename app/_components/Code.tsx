import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"code">) => {
  return (
    <code
      className={cn(
        "bg-accent/40 font-mono border border-accent rounded p-1 text-primary",
        className
      )}
      {...props}
    />
  );
};

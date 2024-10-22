"use client";
import Image from "next/image";
import { Badge } from "./ui/badge";

export interface WorkProps {
  title: string | undefined;
  role?: string | undefined;
  date: string | undefined;
  image: string | undefined;
  type?: string | undefined;
}

export const Work = (props: WorkProps) => {
  return (
    <div className="inline-flex items-center gap-3 p-1">
      <div className="w-12 h-12 relative group">
        <Image
          src={`${props.image}`}
          alt={`${props.title}`}
          fill
          priority
          className="object-cover rounded border"
        />
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.type && (
            <Badge
              variant="outline"
              className="text-xs rounded-full max-sm:hidden"
            >
              {props.type}
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <div className="">
        <p className="text-muted-foreground text-xs">{props.date}</p>
      </div>
    </div>
  );
};

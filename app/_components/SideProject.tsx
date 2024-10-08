import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { DevLang } from "./DevLang";

export type SideProjectProps = {
  id?: number;
  name?: string;
  description?: string;
  html_url: string;
  language?: string;
};

export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.html_url}
      target="_blank"
      className="inline-flex items-center gap-4 hover:bg-accent/30 transition-colors p-1 rounded group"
    >
      <DevLang language={props.language} />
      <div>
        <div className="flex gap-2 max-sm:flex-col items-center max-sm:items-start mb-1 max-sm:gap-1">
          <p className="text-md font-semibold flex max-sm:flex-col items-center max-sm:items-start">
            {props.name}
          </p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <div className="flex-1">
        <ArrowUpRight
          size={16}
          className="mr-2 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform max-sm:hidden"
        />
      </div>
    </Link>
  );
};

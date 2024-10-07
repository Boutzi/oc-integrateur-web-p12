import { ArrowUpRight, Code } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

export const getRepositories = async () => {
  return fetch(`https://api.github.com/users/Boutzi/starred`)
    .then((res) => res.json())
    .then((data) => data);
};

export const getLanguages = async (repoName: string) => {
  return fetch(`https://api.github.com/repos/Boutzi/${repoName}/languages`)
    .then((res) => res.json())
    .then((data) => data);
};

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
      className="inline-flex items-start gap-4 hover:bg-accent/30 transition-colors p-1 rounded group"
    >
      <div className={`bg-accent/50 text-accent-foreground p-3 rounded`}>
        <Code size={24} />
      </div>
      <div>
        <div className="flex gap-2 max-sm:flex-col items-center  max-sm:items-start mb-1 max-sm:gap-1">
          <p className="text-md font-semibold flex max-sm:flex-col items-center max-sm:items-start">
            {props.name}
          </p>
          {props.language && (
            <Badge
              variant={"outline"}
              className={`text-xs rounded-full ${
                props.language === "JavaScript"
                  ? "text-amber-200"
                  : props.language === "TypeScript"
                  ? "text-sky-500"
                  : props.language === "Python"
                  ? "text-blue-500"
                  : props.language === "C#"
                  ? "text-violet-500"
                  : ""
              }`}
            >
              {props.language}
            </Badge>
          )}
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

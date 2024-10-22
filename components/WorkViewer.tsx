import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";
import { Ban } from "lucide-react";
import { useTranslations } from "next-intl";

export interface ViewerProps {
  id: number | undefined;
  title: string;
  date: string;
  descriptionOne?: string | undefined;
  descriptionTwo?: string | undefined;
  descriptionThree?: string | undefined;
  image: string | undefined;
  imageFull: string | undefined;
  language: string | undefined;
  technos: string[] | undefined;
  visitOnGithub: string | null | undefined;
}

export const WorkViewer = (props: ViewerProps) => {
  const t = useTranslations();
  return (
    <div className="relative group">
      <div className="flex p-0">
        <div className={`flex-1  h-auto p-0 backdrop-blur`}>
          <div className={`items-center mt-4`} />

          <div className={`my-8`}>
            <h2 className="text-6xl text-primary mx-auto text-center font-thin max-md:pt-4">
              {props.title}
            </h2>
            <ul className="flex flex-wrap gap-2 items-center mx-auto my-4 justify-center">
              {props.technos?.map((item, index) => {
                return (
                  <li key={index}>
                    <Badge variant={"outline"} className="">
                      {item}
                    </Badge>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 items-center">
            <Image
              src={`${props.imageFull || "/empty.webp"}`}
              alt={`${props.title} ${t("work.imageAlt")}`}
              width={1120}
              height={476}
              priority
              className="w-[70%] h-auto object-contain mx-auto border shadow-lg max-md:w-full"
            />
          </div>
          <h3 className="text-sm text-accent-foreground text-center mt-2">
            {t("work.releasedOn")} {props.date}
          </h3>
          <div className="absolute top-0 right-0">
            {props.visitOnGithub === null ? (
              <Button className="bg-destructive text-white hover:bg-destructive cursor-default">
                <GitHubLogoIcon className="mr-1" />
                {t("work.privateRepo")} <Ban className="ml-1" size={16} />
              </Button>
            ) : (
              <Link
                href={`${props.visitOnGithub}`}
                className=""
                target="_blank"
              >
                <Button className="bg-foreground text-background hover:bg-foreground/80">
                  <GitHubLogoIcon className="mr-1" />
                  {t("work.githubRepo")} <ArrowTopRightIcon className="ml-1" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="my-8 space-y-4 max-w-prose mx-auto">
        <p
          style={{ textIndent: "1.5rem", hyphens: "auto" }}
          className="leading-relaxed text-accent-foreground text-lg text-justify"
        >
          {props.descriptionOne}
        </p>
        <p
          style={{ textIndent: "1.5rem", hyphens: "auto" }}
          className="leading-relaxed text-accent-foreground text-lg text-justify"
        >
          {props.descriptionTwo}
        </p>
        <p
          style={{ textIndent: "1.5rem", hyphens: "auto" }}
          className="leading-relaxed text-accent-foreground text-lg text-justify"
        >
          {props.descriptionThree}
        </p>
      </div>
    </div>
  );
};

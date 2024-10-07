/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { Card } from "@/app/_components/ui/card";
import { Section } from "./Section";
import { getRepositories, SideProject, SideProjectProps } from "./SideProject";
import { Work, WORKS } from "./Work";
import { CONTACT, ContactCard } from "./ContactCard";
import { Badge } from "./ui/badge";

export const Status = () => {
  const [repos, setRepos] = useState<SideProjectProps[]>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const repositories = await getRepositories();
      setRepos(repositories);
    };

    fetchRepositories();
  }, []);

  return (
    <Section className="flex flex-col gap-4">
      <div>
        <Badge
          variant="outline"
          className="rounded-full text-primary border-primary"
        >
          Activity
        </Badge>
      </div>
      <div className="flex max-lg:flex-col items-start justify-between gap-4">
        <div className="flex-[3] w-full">
          <Card className="w-full p-4 flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">Starred Github repositories</p>
            <div className="flex flex-col gap-4">
              {repos?.map((repo: SideProjectProps, index) => (
                repo.name === "arkaans-copilot" ? 
                <SideProject
                  key={index}
                  name={repo.name}
                  description={repo.description}
                  html_url={repo.html_url}
                  language={"JavaScript"}
                /> : 
                repo.name === "oc-integrateur-web-p12" ? 
                <SideProject
                  key={index}
                  name={repo.name}
                  description={repo.description}
                  html_url={repo.html_url}
                  language={"TypeScript"}
                /> : 
                <SideProject
                  key={index}
                  name={repo.name}
                  description={repo.description}
                  html_url={repo.html_url}
                  language={repo.language}
                />
              ))}
            </div>
          </Card>
        </div>
        <div className="flex-[2] w-full h-full flex flex-col gap-4">
          <Card className="flex-1 p-4">
            <p className="text-sm text-muted-foreground">
              Lastest jobs & courses
            </p>
            <div className="flex flex-col gap-4 pt-2">
              {WORKS.map((work, index) => (
                <Work key={index} {...work} />
              ))}
            </div>
          </Card>
          <Card className="flex-1 p-4">
            <p className="text-sm text-muted-foreground">Connect with Me</p>
            <div className="flex gap-4 pt-2 max-lg:flex-col">
              {CONTACT.map((contact, index) => (
                <ContactCard key={index} {...contact} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

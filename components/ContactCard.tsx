"use client";
import { Card } from "./ui/card";
import { GithubUserResponse } from "@/types/user.types";
import { fetchGithubUserData } from "@/utils/getData";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useI18n } from "@/locales/client";

type ContactProps = {
  image: string | undefined;
  mediumImage: string;
  name: string;
  description: number | undefined;
  url: string;
};

export const CONTACT: ContactProps[] = [
  {
    image: undefined,
    mediumImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s",
    name: "GitHub",
    description: undefined,
    url: "",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQH8Q7y36OVrBQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702319071117?e=1733961600&v=beta&t=Q_t3dw9N83VFN1u2S4HGTN5MPXA2-sRRMR2stzyJUDk",
    mediumImage:
      "https://store-images.s-microsoft.com/image/apps.1719.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.abf46174-2d32-4f53-a6cd-644d5b2be452",
    name: "Linkedin",
    description: 107,
    url: "https://www.linkedin.com/in/joseph-girardi/",
  },
];

export const ContactCard = (props: ContactProps) => {
  const [githubUserData, setGithubUserData] =
    useState<GithubUserResponse | null>(null);
  const t = useI18n();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchGithubUserData();
        setGithubUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, []);

  const linkUrl =
    props.name === "GitHub" ? githubUserData?.html_url || "#" : props.url;

  return (
    <Link
      href={linkUrl}
      target="_blank"
      className="w-full hover:bg-accent/20 rounded-xl"
    >
      <Card className="p-2 bg-accent/10 flex items-center gap-3 flex-grow group">
        <div className="relative">
          <img
            src={
              props.name === "GitHub" ? githubUserData?.avatar_url : props.image
            }
            alt={props.name}
            className="w10 h-10 rounded-full object-contain"
          />
          <img
            src={props.mediumImage}
            alt={props.name}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">
            {props.name === "GitHub"
              ? `${githubUserData?.followers} ${t("statusCard.followers")}`
              : `${props.description} ${t("statusCard.connections")}`}{" "}
            // Utilisation de la traduction pour "connections"
          </p>
        </div>
        <ArrowUpRight
          size={16}
          className="mr-1 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
        />
      </Card>
    </Link>
  );
};

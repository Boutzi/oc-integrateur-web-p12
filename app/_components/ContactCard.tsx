/* eslint-disable @next/next/no-img-element */
import { Card } from "@/app/_components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const CONTACT: ContactProps[] = [
    {
      image: "https://avatars.githubusercontent.com/u/130697355?v=4",
      mediumImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s",
      name: "GitHub",
      description: "15 followers",
      url: "https://github.com/Boutzi",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQH8Q7y36OVrBQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702319071117?e=1733961600&v=beta&t=Q_t3dw9N83VFN1u2S4HGTN5MPXA2-sRRMR2stzyJUDk",
      mediumImage:
        "https://store-images.s-microsoft.com/image/apps.1719.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.abf46174-2d32-4f53-a6cd-644d5b2be452",
      name: "Linkedin",
      description: "107 relations",
      url: "https://www.linkedin.com/in/joseph-girardi/",
    },
  ];

type ContactProps = {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url: string;
  };

export const ContactCard = (props: ContactProps) => {
    return (
      <Link
        href={props.url}
        target="_blank"
        className="w-full hover:bg-accent/20 rounded-xl"
      >
        <Card className="p-2 bg-accent/10 flex items-center gap-4 flex-grow group">
          <div className="relative">
            <img
              src={props.image}
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
            <p className="text-xs text-muted-foreground">{props.description}</p>
          </div>
          <ArrowUpRight
            size={16}
            className="mr-1 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </Card>
      </Link>
    );
  };
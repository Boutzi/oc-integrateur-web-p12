import { Badge } from "./ui/badge";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const WORKS: WorkProps[] = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png",
    title: "Openclassrooms",
    role: "Web Integrator",
    type: "Course",
    date: "2024 - Now",
    url: "#",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E0BAQGvpe_509Zo-w/company-logo_200_200/company-logo_200_200/0/1665673493364/onepoint_logo?e=2147483647&v=beta&t=2IzICG66zTjPXU7tr-OJXwOofkj01NmchL2WYVd8VDw",
    title: "One Point",
    role: "Back-end Developer",
    type: "Internship",
    date: "2020 - 2021",
    url: "#",
  },
  {
    image:
      "https://www.midica.fr/cdn/shop/files/69791691_444872012780250_3774773102060240896_n_1cc5c387-a6f8-4bac-bbf4-e99b2cb66c1a_1200x1200_crop_center.png?v=1597956326",
    title: "Midica",
    role: "Department Manager",
    type: "Full-time contract",
    date: "2021 - 2023",
    url: "#",
  },
];

export type WorkProps = {
  image: string;
  title: string;
  type?: string;
  role: string;
  date: string;
  url: string;
};


export const Work = (props: WorkProps) => {

  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/30 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-12 h-12 object-contain rounded"
      />
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
    </Link>
  );
};

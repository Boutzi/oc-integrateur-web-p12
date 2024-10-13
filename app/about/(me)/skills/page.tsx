"use client";
import { ReactNode, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { X } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
// import currentLocation from "@/utils/currentLocation";

interface Skill {
  name: string;
  icon: JSX.Element | ReactNode;
  proficiency: number;
  categories: string[];
  description: string;
}

const skills: Skill[] = [
  {
    name: "React",
    icon: "react",
    proficiency: 85,
    categories: ["web", "front-end", "frameworks/libs"],
    description:
      "A JavaScript library for building user interfaces, focusing on reusable components and efficient state management.",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    proficiency: 75,
    categories: ["web", "front-end", "scripting"],
    description:
      "A versatile programming language used to create interactive web pages and dynamic content.",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    proficiency: 90,
    categories: ["web", "front-end", "frameworks/libs"],
    description:
      "A utility-first CSS framework for rapid UI development with customizable styles.",
  },
  {
    name: "Python",
    icon: "python",
    proficiency: 65,
    categories: ["software", "back-end", "scripting"],
    description:
      "A high-level programming language known for its readability and versatility in various domains.",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    proficiency: 60,
    categories: ["web", "front-end", "back-end"],
    description:
      "A superset of JavaScript that adds static types, enhancing code quality and maintainability.",
  },
  {
    name: "C#",
    icon: "cs",
    proficiency: 40,
    categories: ["software", "back-end"],
    description:
      "A modern object-oriented programming language developed by Microsoft, widely used in enterprise applications.",
  },
  {
    name: "Amazon Web Services",
    icon: "aws",
    proficiency: 25,
    categories: ["tools", "cloud"],
    description:
      "A comprehensive cloud platform offering a wide range of services for computing, storage, and networking.",
  },
  {
    name: "Adobe PhotoShop",
    icon: "adobe-photoshop",
    proficiency: 99,
    categories: ["tools", "design"],
    description:
      "A leading software for image editing and graphic design, widely used in photography and digital art.",
  },
  {
    name: "Adobe Illustrator",
    icon: "adobe-illustrator",
    proficiency: 99,
    categories: ["tools", "design"],
    description:
      "A vector graphics editor used for creating logos, illustrations, and complex designs.",
  },
  {
    name: "Blender",
    icon: "blender",
    proficiency: 10,
    categories: ["tools", "design", "3d"],
    description:
      "An open-source 3D creation suite for modeling, animation, and rendering.",
  },
  {
    name: "Figma",
    icon: "figma",
    proficiency: 75,
    categories: ["tools", "design", "UX/UI"],
    description:
      "A collaborative interface design tool for creating user interfaces and prototypes.",
  },
  {
    name: "HTML",
    icon: "html",
    proficiency: 99,
    categories: ["web", "front-end"],
    description:
      "The standard markup language for creating web pages and web applications.",
  },
  {
    name: "CSS",
    icon: "css",
    proficiency: 99,
    categories: ["web", "front-end"],
    description:
      "A style sheet language used for describing the presentation of a document written in HTML.",
  },
  {
    name: "Sass",
    icon: "sass",
    proficiency: 70,
    categories: ["web", "front-end", "frameworks/libs"],
    description:
      "A preprocessor scripting language that is interpreted or compiled into CSS.",
  },
  {
    name: "GitHub",
    icon: "github",
    proficiency: 75,
    categories: ["tools", "cloud"],
    description:
      "A web-based platform for version control and collaboration, using Git.",
  },
  {
    name: "Git",
    icon: "git",
    proficiency: 80,
    categories: ["tools"],
    description:
      "A distributed version control system for tracking changes in source code.",
  },
  {
    name: "Insomnia",
    icon: "insomnia",
    proficiency: 60,
    categories: ["tools"],
    description: "A powerful REST API client for debugging and testing APIs.",
  },
  {
    name: "Postman",
    icon: "postman",
    proficiency: 60,
    categories: ["tools"],
    description:
      "A popular tool for API development, allowing users to create, share, and test APIs.",
  },
  {
    name: "Java",
    icon: "java",
    proficiency: 20,
    categories: ["software", "back-end"],
    description:
      "A high-level programming language used for building platform-independent applications.",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    proficiency: 30,
    categories: ["cloud", "database"],
    description:
      "A NoSQL database program that uses JSON-like documents with optional schemas.",
  },
  {
    name: ".Net",
    icon: "net",
    proficiency: 40,
    categories: ["software", "back-end", "frameworks/libs"],
    description:
      "A framework for building applications on Windows, with support for multiple languages.",
  },
  {
    name: "Redux",
    icon: "redux",
    proficiency: 50,
    categories: ["web", "front-end", "frameworks/libs"],
    description:
      "A state management library for JavaScript applications, often used with React.",
  },
  {
    name: "Swagger",
    icon: "swagger",
    proficiency: 90,
    categories: ["web", "back-end", "frameworks/libs"],
    description:
      "A toolset for API documentation and design, enabling interactive API exploration.",
  },
  {
    name: "Slack",
    icon: "slack",
    proficiency: 99,
    categories: ["tools", "workflow"],
    description:
      "A messaging platform for teams to communicate and collaborate in real time.",
  },
  {
    name: "VS Code",
    icon: "vscode",
    proficiency: 99,
    categories: ["tools"],
    description:
      "A popular code editor that supports numerous programming languages and extensions.",
  },
  {
    name: "Node.js",
    icon: "node",
    proficiency: 30,
    categories: ["web", "tools", "back-end"],
    description:
      "A JavaScript runtime built on Chrome's V8 engine for building server-side applications.",
  },
  {
    name: "Firebase",
    icon: "firebase",
    proficiency: 20, // Connaissance basique, utilisé surtout pour Firestore.
    categories: ["web", "tools", "database", "cloud"],
    description:
      "A platform for building mobile and web applications, providing various back-end services.",
  },
  {
    name: "Jupyter",
    icon: "jupyter",
    proficiency: 5, // Très peu de pratique, juste installation et exploration rapide.
    categories: ["scripting", "data science"],
    description:
      "An open-source tool for creating interactive notebooks in data science and analysis.",
  },
  {
    name: "WordPress",
    icon: "wordpress",
    proficiency: 30, // Sites simples avec Elementor, mais pas de développement de thèmes.
    categories: ["web", "CMS"],
    description:
      "A content management system (CMS) used for building and managing websites.",
  },
  {
    name: "Flask",
    icon: "flask",
    proficiency: 30, // Déployé une API basique sur Heroku.
    categories: ["web", "back-end", "frameworks/libs"],
    description:
      "A lightweight web framework for Python, great for building web applications quickly.",
  },
  {
    name: "macOS",
    icon: "apple",
    proficiency: 60, // Bonne utilisation de macOS, mais sans développement spécifique.
    categories: ["operating system"],
    description:
      "A line of operating systems developed by Apple Inc., known for their usability and design.",
  },
  {
    name: "Windows",
    icon: "windows",
    proficiency: 80, // Utilisé au quotidien pour le développement.
    categories: ["operating system"],
    description:
      "A widely used operating system developed by Microsoft, supporting a variety of applications.",
  },
  {
    name: "Adobe Premiere Pro",
    icon: "adobe-premiere",
    proficiency: 30, // Montage simple de clips vidéo.
    categories: ["design", "tools", "video"],
    description:
      "A video editing software used for creating professional-looking videos and content.",
  },
  {
    name: "Adobe InDesign",
    icon: "adobe-indesign",
    proficiency: 70, // Montage simple de clips vidéo.
    categories: ["design", "tools"],
    description:
      "A desktop publishing software for creating layouts for print and digital media.",
  },
  {
    name: "Next.js",
    icon: "next",
    proficiency: 70, // Utilisé principalement pour le front-end, quelques API routes, mais pas encore de déploiements avancés.
    categories: ["web", "front-end", "back-end", "frameworks/libs"],
    description:
      "A React framework for building server-rendered applications and static websites.",
  },
  {
    name: "Heroku",
    icon: "heroku",
    proficiency: 40, // Déployé un bot Discord et une API Flask.
    categories: ["cloud", "tools"],
    description:
      "A platform as a service (PaaS) for deploying applications in the cloud.",
  },
  {
    name: "Selenium",
    icon: "selenium",
    proficiency: 40,
    categories: ["scripting", "frameworks/libs"],
    description:
      "A framework for automating web browsers, primarily used for testing web applications.",
  },
  {
    name: "Notion",
    icon: "notion",
    proficiency: 40,
    categories: ["workflow", "tools"],
    description:
      "An all-in-one workspace for note-taking, project management, and collaboration.",
  },
  {
    name: "Discord.js",
    icon: "discord",
    proficiency: 40,
    categories: ["frameworks/libs"],
    description:
      "A powerful library for interacting with the Discord API using JavaScript.",
  },
].sort((a, b) => a.name.localeCompare(b.name));

const allCategories = [
  "web",
  "software",
  "scripting",
  "front-end",
  "back-end",
  "database",
  "frameworks/libs",
  "cloud",
  "tools",
  "workflow",
  "design",
  "UX/UI",
  "3d",
  "video",
  "CMS",
  "operating system",
  "data science",
];

export default function Skills() {
  // const basePath = currentLocation();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredSkills =
    selectedCategories.length === 0
      ? skills
      : skills.filter((skill) =>
          selectedCategories.some((category) =>
            skill.categories.includes(category)
          )
        );

  const resetFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-8 text-center">My Skills</h1>

      <div className="mb-4 flex flex-wrap gap-2 justify-center">
        {allCategories.map((category) => (
          <Button
            key={category}
            variant={
              selectedCategories.includes(category) ? "default" : "outline"
            }
            onClick={() => toggleCategory(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="w-full flex h-10 justify-center">
        {selectedCategories && selectedCategories.length > 0 && (
          <Button
            className="aspect-square rounded-full flex gap-1 bg-destructive hover:bg-destructive/80"
            onClick={resetFilters}
          >
            <X size={16} /> Reset Filters
          </Button>
        )}
      </div>
      <div className="grid gap-2 grid-cols-5 max-lg:grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 ">
        {filteredSkills.map((skill) => (
          <HoverCard key={skill.name}>
            <HoverCardTrigger asChild>
              <Card
                key={skill.name}
                className="overflow-hidden bg-transparent border-none shadow-none hover:bg-accent/30 cursor-pointer"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex flex-col items-center gap-4 justify-between">
                    <div className="flex flex-col items-center gap-2 text-md whitespace-nowrap">
                      <div className="aspect-square p-4 w-28">
                        <Image
                          src={`./icons/${skill.icon}.svg`}
                          width={64}
                          height={64}
                          alt={`${skill.name} Logo`}
                          className="w-auto"
                        />
                      </div>
                      {skill.name}
                    </div>
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Progress value={skill.proficiency} className="w-full" />
                    <span className="text-sm font-medium">
                      {skill.proficiency}%
                    </span>
                  </div>
                </CardHeader>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-3">
                <div className="aspect-square w-256">
                  <Image
                    src={`./icons/${skill.icon}.svg`}
                    width={256}
                    height={256}
                    alt={`${skill.name} Logo`}
                    className="w-auto"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{skill.name}</h4>
                  <p className="text-sm">{skill.description}</p>
                  <div className="flex gap-2 flex-wrap items-center pt-2">
                    {skill.categories.map((category) => (
                      <Badge
                        key={category}
                        variant="outline"
                        className="capitalize text-xs"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}

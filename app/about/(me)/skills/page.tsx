"use client";
import { ReactNode, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import { X } from "lucide-react";

interface Skill {
  name: string;
  icon: JSX.Element | ReactNode;
  proficiency: number;
  categories: string[];
}

const skills: Skill[] = [
  {
    name: "React",
    icon: "react",
    proficiency: 85,
    categories: ["web", "front", "frameworks/libs"],
  },
  {
    name: "JavaScript",
    icon: "javascript",
    proficiency: 75,
    categories: ["web", "front", "scripting"],
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    proficiency: 90,
    categories: ["web", "front", "frameworks/libs"],
  },
  {
    name: "Python",
    icon: "python",
    proficiency: 65,
    categories: ["software", "back", "scripting"],
  },
  {
    name: "TypeScript",
    icon: "typescript",
    proficiency: 60,
    categories: ["web", "front", "back"],
  },
  {
    name: "C#",
    icon: "cs",
    proficiency: 40,
    categories: ["software", "back"],
  },
  {
    name: "Amazon Web Services",
    icon: "aws",
    proficiency: 25,
    categories: ["tools", "cloud"],
  },
  {
    name: "Adobe PhotoShop",
    icon: "adobe-photoshop",
    proficiency: 99,
    categories: ["tools", "design"],
  },
  {
    name: "Adobe Illustrator",
    icon: "adobe-illustrator",
    proficiency: 99,
    categories: ["tools", "design"],
  },
  {
    name: "Blender",
    icon: "blender",
    proficiency: 10,
    categories: ["tools", "design", "3d"],
  },
  {
    name: "Figma",
    icon: "figma",
    proficiency: 75,
    categories: ["tools", "design", "UX/UI"],
  },
  {
    name: "HTML",
    icon: "html",
    proficiency: 99,
    categories: ["web", "front"],
  },
  {
    name: "CSS",
    icon: "css",
    proficiency: 99,
    categories: ["web", "front"],
  },
  {
    name: "Sass",
    icon: "sass",
    proficiency: 70,
    categories: ["web", "front", "frameworks/libs"],
  },
  {
    name: "GitHub",
    icon: "github",
    proficiency: 75,
    categories: ["tools", "cloud"],
  },
  {
    name: "Git",
    icon: "git",
    proficiency: 80,
    categories: ["tools"],
  },
  {
    name: "Insomnia",
    icon: "insomnia",
    proficiency: 60,
    categories: ["tools"],
  },
  {
    name: "Postman",
    icon: "postman",
    proficiency: 60,
    categories: ["tools"],
  },
  {
    name: "Java",
    icon: "java",
    proficiency: 20,
    categories: ["software", "back"],
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    proficiency: 30,
    categories: ["cloud", "database"],
  },
  {
    name: ".Net",
    icon: "net",
    proficiency: 40,
    categories: ["software", "back", "frameworks/libs"],
  },
  {
    name: "Redux",
    icon: "redux",
    proficiency: 50,
    categories: ["web", "front", "frameworks/libs"],
  },
  {
    name: "Swagger",
    icon: "swagger",
    proficiency: 90,
    categories: ["web", "back", "frameworks/libs"],
  },
  {
    name: "Slack",
    icon: "slack",
    proficiency: 99,
    categories: ["tools", "workflow"],
  },
  {
    name: "VS Code",
    icon: "vscode",
    proficiency: 99,
    categories: ["tools"],
  },
  {
    name: "Node.js",
    icon: "node",
    proficiency: 30,
    categories: ["web", "tools", "back"],
  },
  {
    name: "Firebase",
    icon: "firebase",
    proficiency: 20, // Connaissance basique, utilisé surtout pour Firestore.
    categories: ["web", "tools", "database", "cloud"],
  },
  {
    name: "Jupyter",
    icon: "jupyter",
    proficiency: 5, // Très peu de pratique, juste installation et exploration rapide.
    categories: ["scripting", "data science"],
  },
  {
    name: "WordPress",
    icon: "wordpress",
    proficiency: 30, // Sites simples avec Elementor, mais pas de développement de thèmes.
    categories: ["web", "CMS"],
  },
  {
    name: "Flask",
    icon: "flask",
    proficiency: 30, // Déployé une API basique sur Heroku.
    categories: ["web", "back", "frameworks/libs"],
  },
  {
    name: "Apple",
    icon: "apple",
    proficiency: 60, // Bonne utilisation de macOS, mais sans développement spécifique.
    categories: ["operating system"],
  },
  {
    name: "Windows",
    icon: "windows",
    proficiency: 80, // Utilisé au quotidien pour le développement.
    categories: ["operating system"],
  },
  {
    name: "Adobe Premiere Pro",
    icon: "adobe-premiere",
    proficiency: 30, // Montage simple de clips vidéo.
    categories: ["design", "tools", "video"],
  },
  {
    name: "Adobe InDesign",
    icon: "adobe-indesign",
    proficiency: 70, // Montage simple de clips vidéo.
    categories: ["design", "tools"],
  },
  {
    name: "Next.js",
    icon: "next",
    proficiency: 70, // Utilisé principalement pour le front, quelques API routes, mais pas encore de déploiements avancés.
    categories: ["web", "front", "back", "frameworks/libs"],
  },
  {
    name: "Heroku",
    icon: "heroku",
    proficiency: 40, // Déployé un bot Discord et une API Flask.
    categories: ["cloud", "tools"],
  },
  {
    name: "Selenium",
    icon: "selenium",
    proficiency: 40,
    categories: ["scripting", "frameworks/libs"],
  },
  {
    name: "Notion",
    icon: "notion",
    proficiency: 40,
    categories: ["workflow", "tools"],
  },
  {
    name: "Discord.js",
    icon: "discord",
    proficiency: 40,
    categories: ["frameworks/libs"],
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
          <Card
            key={skill.name}
            className="overflow-hidden bg-transparent border-none shadow-none hover:bg-accent/30 cursor-pointer"
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex flex-col items-center gap-4 justify-between">
                <div className="flex flex-col items-center gap-2 text-md whitespace-nowrap">
                  <div className="rounded aspect-square bg p-4 overflow-hidden">
                    <Image
                      src={`/icons/${skill.icon}.svg`}
                      width={64}
                      height={64}
                      alt={`${skill.name} Logo`}
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
            {/* <CardContent>
              <div className="flex gap-2 flex-wrap">
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
            </CardContent> */}
          </Card>
        ))}
      </div>
    </div>
  );
}

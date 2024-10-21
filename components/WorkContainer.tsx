"use client";

import { useState } from "react";
import { WorkCarousel } from "./WorkCarousel";
import { ViewerProps, WorkViewer } from "./WorkViewer";
import { useTranslations } from "next-intl";
import { SidebarProvider } from "./ui/sidebar";

const items = [
  {
    id: 1,
    title: "Portfolio",
    description: "Description for Portfolio",
    image: "/joe.png",
    imageFull: "/portfolio.png",
    visitOnGithub: "https://github.com/Boutzi/oc-integrateur-web-p12",
    language: "TypeScript",
  },
  {
    id: 2,
    title: "Winpolar",
    description: "Description for Winpolar",
    image: "/winpolar-logo.png",
    imageFull: "/winpolar.png",
    language: "CSharp",
  },
  {
    id: 3,
    title: "PyGo Score",
    description: "Description for PyGo Score",
    image: "/pygo-logo.png",
    imageFull: "/portfolio.png",
    language: "Python",
  },
  {
    id: 4,
    title: "Pomodoro App",
    description: "Description for Pomodoro App",
    image: "/pomodoro-logo.png",
    imageFull: "/pomodoro.png",
    language: "CSharp",
  },
  {
    id: 5,
    title: "Arkaans Copilot",
    description: "Description for Arkaans Copilot",
    image: "/arkaans-logo.png",
    imageFull: "/arkaans.png",
    language: "JavaScript",
  },
  {
    id: 6,
    title: "Awesome Picker",
    description: "Description for Awesome Picker",
    image: "/arkaans-logo.png",
    imageFull: "/portfolio.png",
    language: "JavaScript",
  },
];

export const WorkContainer = () => {
  const t = useTranslations();
  const [selectedItem, setSelectedItem] = useState<ViewerProps>(items[0]);

  return (
    <SidebarProvider>
      <div className="w-full max-w-6xl mx-auto mb-4">
        <div className="flex flex-col gap-4">
          <WorkCarousel
            category={`${t("work.description")}`}
            data={items}
            setSelectedItem={(id) => setSelectedItem(items[id - 1])}
          />
          <WorkViewer
            title={selectedItem.title}
            image={selectedItem.image}
            description={selectedItem.description}
            imageFull={selectedItem.imageFull}
          />
        </div>
      </div>
    </SidebarProvider>
  );
};

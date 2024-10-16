"use client";

import * as React from "react";
import { WorkCarousel } from "./WorkCarousel";

// Mock data for the carousel items
const items = [
  {
    id: 1,
    title: "Portfolio",
    description: "Description for Portfolio",
    image: "",
  },
  {
    id: 2,
    title: "Winpolar",
    description: "Description for Winpolar",
    image: "",
  },
  {
    id: 3,
    title: "PyGo Score",
    description: "Description for PyGo Score",
    image: "",
  },
  {
    id: 4,
    title: "Pomodoro App",
    description: "Description for Pomodoro App",
    image: "",
  },
  {
    id: 5,
    title: "Arkaans Copilot",
    description: "Description for Arkaans Copilot",
    image: "",
  },
  {
    id: 6,
    title: "Awesome Picker",
    description: "Description for Awesome Picker",
    image: "",
  },
  {
    id: 7,
    title: "Project 7 - OpenClassrooms",
    description: "Description for Project 7",
    image: "",
  },
  {
    id: 8,
    title: "Project 10 - OpenClassrooms",
    description: "Description for Project 10",
    image: "",
  },
];

export const WorkView = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-24">
      <div className="flex flex-col gap-12 z-30">
        <WorkCarousel category="Featured Projects" data={items} />
        <WorkCarousel category="Python projects" data={items} />
        <WorkCarousel category="JS/TS projects" data={items} />
        <WorkCarousel category="C# projects" data={items} />
      </div>
    </div>
  );
};

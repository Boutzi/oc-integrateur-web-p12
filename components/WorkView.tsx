"use client";

import * as React from "react";
import { WorkCarousel } from "./Carousel";

// Mock data for the carousel items
const items = [
  {
    id: 1,
    title: "Movie 1",
    description: "Description for Movie 1",
    image: "/got.jpg",
  },
  {
    id: 2,
    title: "Movie 2",
    description: "Description for Movie 2",
    image: "/lucifer.jpg",
  },
  {
    id: 3,
    title: "Movie 3",
    description: "Description for Movie 3",
    image: "/outer.jpeg",
  },
  {
    id: 4,
    title: "Movie 4",
    description: "Description for Movie 4",
    image: "/rop.webp",
  },
  {
    id: 5,
    title: "Movie 5",
    description: "Description for Movie 5",
    image: "/originals.jpg",
  },
  {
    id: 6,
    title: "Movie 6",
    description: "Description for Movie 6",
    image: "/ragnar.png",
  },
  {
    id: 7,
    title: "Movie 7",
    description: "Description for Movie 7",
    image: "/bad.jpg",
  },
  {
    id: 8,
    title: "Movie 8",
    description: "Description for Movie 8",
    image: "/bbt.webp",
  },
];

export const WorkView = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-24">
      <div className="flex flex-col gap-12">
        <WorkCarousel category="Featured Projects" data={items} />
        <WorkCarousel category="Python projects" data={items} />
        <WorkCarousel category="JS/TS projects" data={items} />
        <WorkCarousel category="C# projects" data={items} />
      </div>
    </div>
  );
};

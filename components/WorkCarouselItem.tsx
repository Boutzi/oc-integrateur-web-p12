"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { CarouselItem } from "./ui/carousel";

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  origin: string;
  clicked: () => void;
}

export const WorkCarouselItem = (props: CarouselItem) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    if (expandedItem === null) {
      setExpandedItem(id);
    }
  };

  const handleMouseLeave = () => {
    setExpandedItem(null);
  };

  return (
    <CarouselItem
      className=" pl-2 md:pl-4 md:basis-1/3 lg:basis-1/5 overflow-visible relative group select-none"
      onMouseEnter={() => handleMouseEnter(props.id)}
      onMouseLeave={handleMouseLeave}
      onClick={props.clicked}
    >
      <Card className={`border-none cursor-pointer rounded overflow-hidden`}>
        <CardContent className="p-0">
          <div className="aspect-w-16 aspect-h-10 overflow-hidden shadow-md">
            <Image
              src={props.image}
              alt={props.title}
              fill
              priority
              sizes="(max-width: 500px) 100vw, (max-width: 860px) 50vw, 33vw"
              className="w-full h-auto object-cover hover:opacity-75"
            />
          </div>
        </CardContent>
        {/* <div
          className={`absolute shadow-md bg-primary-foreground flex rounded-b-sm justify-between z-50 w-full p-2 transition-opacity duration-300 ease-in-out transform ${
            expandedItem === props.id
              ? "opacity-100 delay-500"
              : "opacity-0 duration-75"
          } group-hover:flex group-hover:opacity-100 group-hover:delay-500`}
        >
          <div className="">
            <h3 className="text-lg font-semibold">{props.title}</h3>
            <p className="text-sm text-accent-foreground/50">
              {props.description}
            </p>
          </div>
          <div>
            <div>
              <Button
                onClick={() => setExpandedItem(null)}
                variant="ghost"
                size="icon"
                className="border-2 rounded-full text-foreground/60 hover:border-foreground hover:bg-inherit hover:text-foreground"
              >
                <ChevronDown className="h-6 w-6" />
                <span className="sr-only">{t("moreInfo")}</span>
              </Button>
            </div>
          </div>
        </div> */}
      </Card>
    </CarouselItem>
  );
};

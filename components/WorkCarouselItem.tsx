"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { CarouselItem } from "./ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  origin: string;
}

export const WorkCarouselItem = (props: CarouselItem) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const t = useTranslations();

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
      className=" pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4 overflow-visible hover:z-50 z-40 relative group"
      onMouseEnter={() => handleMouseEnter(props.id)}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        className={`border-none cursor-pointer transition-transform duration-300 ease-in-out transform z-40 rounded-none ${
          props.origin
        } ${
          expandedItem === props.id
            ? "scale-150 delay-500 -translate-y-14"
            : "duration-300"
        }`}
      >
        <CardContent className="p-0">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden shadow-md">
            <Image
              src={props.image}
              alt={props.title}
              fill
              priority
              sizes="(max-width: 500px) 100vw, (max-width: 860px) 50vw, 33vw"
              className="w-full h-auto object-cover"
            />
          </div>
        </CardContent>
        <div
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
          <Dialog>
            <DialogTrigger asChild>
              <Button
                onClick={() => setExpandedItem(null)}
                variant="ghost"
                size="icon"
                className="border-2 rounded-full text-foreground/60 hover:border-foreground hover:bg-inherit hover:text-foreground"
              >
                <ChevronDown className="h-6 w-6" />
                <span className="sr-only">{t("moreInfo")}</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogDescription>{props.description}</DialogDescription>
                <DialogDescription>
                  blablablablablablablablablablablabla
                  blablablablablablablablablablablabla
                  blablablablablablablablablablablabla
                  blablablablablablablablablablablabla
                  blablablablablablablablablablablabla
                  blablablablablablablablablablablabla
                  blablablablablablablablablablablabla
                  blablablablablablablablablablablabla
                  blablablablablablablablablablablabla
                  blablablablablablablablablablablabla
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </Card>
    </CarouselItem>
  );
};

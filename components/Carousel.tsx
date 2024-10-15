import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";

// Interface mise à jour
export interface CarouselCategory {
  category: string;
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
}

export const WorkCarousel = (props: CarouselCategory) => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">{props.category}</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {props.data.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="relative group">
                <CardContent className="p-0">
                  <div className="aspect-w-16 aspect-h-9 rounded">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="rounded-lg absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white"
                        >
                          <Info className="h-6 w-6" />
                          <span className="sr-only">More info</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                          <DialogDescription>
                            {item.description}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 bg-primary/20 hover:bg-primary/30">
          <ChevronLeft className="h-8 w-8" />
        </CarouselPrevious>
        <CarouselNext className="hidden md:flex -right-12 bg-primary/20 hover:bg-primary/30">
          <ChevronRight className="h-8 w-8" />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

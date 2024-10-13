"use client";
import * as React from "react";
import { Check, LucideSettings } from "lucide-react";

import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";

export function Settings() {
  const [theme, setTheme] = React.useState("violet");

  const handleChange = (theme: string) => {
    setTheme(theme);
  };

  React.useEffect(() => {
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="bg-transparent border-none hover:bg-accent/30 shadow-none"
        >
          <LucideSettings className="h-[1.2rem] w-[1.2rem] text-foreground" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="grid grid-cols-3 gap-2 p-2 text-black"
      >
        <DropdownMenuItem
          onClick={() => handleChange("gray")}
          className="size-8 cursor-pointer aspect-square bg-gray-100 hover:outline-foreground outline-2"
        >
          {theme === "gray" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange("violet")}
          className="size-8 cursor-pointer aspect-square bg-violet-700 hover:outline-foreground outline-2"
        >
          {theme === "violet" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange("blue")}
          className="size-8 cursor-pointer aspect-square bg-blue-700 hover:outline-foreground outline-2"
        >
          {theme === "blue" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange("green")}
          className="size-8 cursor-pointer aspect-square bg-green-700 hover:outline-foreground outline-2"
        >
          {theme === "green" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange("orange")}
          className="size-8 cursor-pointer aspect-square bg-orange-700 hover:outline-foreground outline-2"
        >
          {theme === "orange" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChange("pink")}
          className="size-8 cursor-pointer aspect-square bg-pink-700 hover:outline-foreground outline-2"
        >
          {theme === "pink" && <Check />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

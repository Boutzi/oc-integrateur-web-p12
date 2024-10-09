"use client";
import { Download } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const menuItems = [
  { href: "/about", label: "Bio" },
  { href: "/about/experience", label: "Experience" },
  { href: "/about/education", label: "Education" },
  { href: "/about/skills", label: "Skills" },
];

export const AboutNav = () => {
  const pathname = usePathname();
  return (
    <aside className="flex flex-col justify-stretch h-full rounded-lg mr-4">
      <div className="fixed">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="font-caption text-5xl font-bold text-primary max-md:text-4xl max-sm:text-3xl">
            About me
          </h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            {menuItems.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${
                  pathname === link.href && "font-semibold text-primary"
                } hover:text-primary`}
              >
                {link.label}
              </Link>
            ))}
            <div>
              <Link
                href={"../CV-Joseph-Girardi-Dev-2025.pdf"}
                target="_blank"
              >
                <Button variant={"outline"} className="flex gap-2 text-">
                  <Download size={16} /> Download CV
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
};

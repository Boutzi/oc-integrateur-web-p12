"use client";
import { Download } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useUser } from "@/context/UserContext";
import { useI18n } from "@/locales/client";

export const AboutNav = () => {
  const { user } = useUser();
  const pathname = usePathname();
  const t = useI18n();

  const menuItems = [
    { href: "/about", label: t("aboutNav.bio") },
    { href: "/about/experience", label: t("aboutNav.experience") },
    { href: "/about/education", label: t("aboutNav.education") },
    { href: "/about/skills", label: t("aboutNav.skills") },
  ];

  return (
    <aside className="flex flex-col justify-stretch h-full rounded-lg mr-4 max-xl:mb-8 max-sm:items-center max-sm:w-full max-sm:mx-0">
      <div className="fixed max-xl:relative">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="font-caption text-5xl font-bold text-primary max-md:text-4xl max-sm:text-3xl max-sm:text-center max-sm:mb-4">
            {t("aboutRoute")}
          </h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground max-xl:flex max-xl:flex-row max-xl:items-center max-sm:flex-wrap max-sm:justify-center"
            x-chunk="dashboard-04-chunk-0"
          >
            {menuItems.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${
                  pathname === link.href &&
                  "whitespace-nowrap font-semibold text-primary max-xl:border max-xl:bg-primary max-xl:py-1 max-xl:px-3 max-xl:rounded-full max-xl:text-white"
                } hover:text-primary max-xl:border max-xl:border-accent max-xl:text-foreground max-xl:py-1 max-xl:px-3 max-xl:rounded-full max-xl:hover:bg-primary max-xl:hover:text-white max-xl:font-semibold`}
              >
                {link.label}
              </Link>
            ))}
            {user?.allowCvDownload ? (
              <div className="flex justify-center mt-4 max-xl:block max-xl:justify-normal max-xl:mt-0">
                <Link
                  href={`${user?.cvUrl}`}
                  target="_blank"
                  prefetch={false}
                  rel="noopener noreferrer"
                >
                  <Button
                    variant={"outline"}
                    className="flex gap-2 max-xl:rounded-full max-xl:h-8 max-xl:bg-accent-foreground max-xl:text-background"
                  >
                    <Download size={16} /> {t("heroSection.downloadCV")}{" "}
                    {/* Traduction du texte "Download CV" */}
                  </Button>
                </Link>
              </div>
            ) : (
              ""
            )}
          </nav>
        </div>
      </div>
    </aside>
  );
};

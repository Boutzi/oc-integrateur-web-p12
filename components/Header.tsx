"use client";
import { useState } from "react";
import { Section } from "./Section";
import Link from "next/link";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { MenuIcon, X } from "lucide-react";
import { JoeIcon } from "./icons/JoeIcon";
import NavLink from "./NavLink";
import { ModeToggle } from "./ModeToggle";
import { Settings } from "./Settings";
import LangSwitcher from "./LangSwitcher";
import { useTranslations } from "next-intl";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;
  //     if (menuOpen && !target.closest("header")) {
  //       setMenuOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [menuOpen]);

  return (
    <header className="sticky top-0 border-b bg-background/80 backdrop-blur z-40">
      <Section className="flex items-center justify-between p-0 max-sm:pt-2 max-sm:pb-2">
        <Link href={"/"} onClick={handleCloseMenu} prefetch={false}>
          <JoeIcon size={48} className="p-0" />
        </Link>
        <nav className="hidden sm:flex items-center">
          <ul className="inline-flex items-center">
            <div className="flex items-center gap-4 pr-4 border-r border-accent-foreground/30 h-4">
              <NavLink href={`/about`}>{t("aboutRoute")}</NavLink>
              <NavLink href={`/work`}>{t("workRoute")}</NavLink>
              <NavLink href={`/contact`}>{t("contactRoute")}</NavLink>
            </div>

            <div className="flex items-center px-2 border-r border-accent-foreground/30 h-4">
              <ModeToggle />
              <LangSwitcher />
              <Settings />
            </div>

            <div className="flex items-center gap-4 pl-4">
              <Link
                target="_blank"
                href={"https://github.com/Boutzi"}
                className={"p-0"}
              >
                <GithubIcon
                  size={16}
                  className="text-foreground hover:text-primary"
                />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/joseph-girardi/"}
                className={"p-0"}
              >
                <LinkedinIcon
                  size={16}
                  className="text-foreground hover:text-primary"
                />
              </Link>
            </div>
          </ul>
        </nav>
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="p-0">
            {!menuOpen ? (
              <MenuIcon className="size-8" />
            ) : (
              <X className="size-8" />
            )}
          </button>
        </div>
      </Section>
      {menuOpen && (
        <div className="absolute top-18 left-0 right-0 bg-background z-40 sm:hidden flex flex-col p-5 border-t border-b border-accent-foreground/30 items-end">
          <div className="flex flex-col pb-3 text-right gap-2">
            <NavLink
              href={"/about"}
              className="text-xl"
              onClick={handleCloseMenu}
            >
              {t("aboutRoute")}
            </NavLink>
            <NavLink
              href={"/work"}
              className="text-xl"
              onClick={handleCloseMenu}
            >
              {t("workRoute")}
            </NavLink>
            <NavLink
              href={"/contact"}
              className="text-xl"
              onClick={handleCloseMenu}
            >
              {t("contactRoute")}
            </NavLink>
          </div>
          <div className="flex flex-row border-b gap-2 border-t border-accent-foreground/10 pb-3 pt-3 items-center pl-0">
            <ModeToggle />
            <LangSwitcher />
            <Settings />
          </div>
          <div className="flex gap-4 mt-2 pt-3">
            <Link
              target="_blank"
              href={"https://github.com/Boutzi"}
              className={"p-0"}
            >
              <GithubIcon
                size={24}
                className="text-foreground hover:text-primary"
              />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/joseph-girardi/"}
              className={"p-0"}
            >
              <LinkedinIcon
                size={24}
                className="text-foreground hover:text-primary"
              />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

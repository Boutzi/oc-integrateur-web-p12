"use client";
import { useEffect, useState } from "react";
import { Section } from "./Section";
import Link from "next/link";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { MoonIcon, SunIcon, MenuIcon, X } from "lucide-react";
import { JoeIcon } from "./icons/JoeIcon";
import NavLink from "./NavLink";
import { Switch } from "./ui/switch";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuOpen && !target.closest("header")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 border-b bg-background z-40">
      <Section className="flex items-center justify-between p-0 max-sm:pt-2 max-sm:pb-2">
        <Link href={"/"} onClick={handleCloseMenu}>
          <JoeIcon size={48} className="p-0" />
        </Link>
        <nav className="hidden sm:flex items-center">
          <ul className="inline-flex items-center">
            <div className="flex items-center gap-4 pr-4 border-r border-accent-foreground/30 h-4">
              <NavLink href={"/about"}>About</NavLink>
              <NavLink href={"/work"}>Work</NavLink>
              <NavLink href={"/contact"}>Contact</NavLink>
            </div>

            <div className="flex items-center gap-4 pr-4 pl-4 border-r border-accent-foreground/30 h-4">
              <button onClick={toggleDarkMode} className={"p-0"}>
                {darkMode ? (
                  <MoonIcon className="size-5 hover:text-primary" />
                ) : (
                  <SunIcon className="size-5 hover:text-primary" />
                )}
              </button>
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
              About
            </NavLink>
            <NavLink
              href={"/work"}
              className="text-xl"
              onClick={handleCloseMenu}
            >
              Work
            </NavLink>
            <NavLink
              href={"/contact"}
              className="text-xl"
              onClick={handleCloseMenu}
            >
              Contact
            </NavLink>
          </div>
          <div className="flex flex-row border-b gap-2 border-t border-accent-foreground/10 pb-3 pt-3 items-center pl-0">
              {darkMode ? (
                <MoonIcon className="size-6 text-accent-foreground/60" />
              ) : (
                <SunIcon className="size-6 text-accent-foreground/60" />
              )}
            <button onClick={toggleDarkMode} className={"p-0 flex items-center"}>
              <Switch />
            </button>
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

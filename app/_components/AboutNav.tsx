"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/about", label: "Bio" },
  { href: "/about/experience", label: "Experience" },
  { href: "/about/education", label: "Education" },
  { href: "/about/skills", label: "Skills" },
];

export const AboutNav = () => {
  const pathname = usePathname();
  return (
    <aside>
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
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

"use client";
import AboutNav from "@/components/About/AboutNav";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let title = "About me";

    if (pathname === "/about/skills") {
      title = "My Skills | Joe";
    } else if (pathname === "/about/credentials") {
      title = "My Credentials | Joe";
    }

    document.title = title;
  }, [pathname]);

  return (
    <>
      <main className="main-content">
        <AboutNav />
        {children}
      </main>
    </>
  );
}

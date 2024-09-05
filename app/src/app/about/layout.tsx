"use client";
import AboutNav from "@/components/About/AboutNav";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="main-content">
        <AboutNav />
        {children}
      </main>
    </>
  );
}

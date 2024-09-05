"use client";
import Hero from "@/components/Hero/Hero";
import Latest from "@/components/Latest/Latest";
import Loader from "@/components/Theme/Loader";
import { useEffect, useState } from "react";

export default function HomeClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main-content">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <Latest />
        </>
      )}
    </main>
  );
}

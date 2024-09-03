"use client";
import Hero from "@/components/Hero/Hero";
import Loader from "@/components/Theme/Loader";
import { useEffect, useState } from "react";

export default function Home(): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  
  return (
  <main className="main-content">
    {loading ? <Loader /> : <Hero />}
    </main>
    )
}

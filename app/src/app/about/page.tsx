"use client";
import Loader from "@/components/Theme/Loader";
import { useEffect, useState } from "react";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
  
    return () => clearTimeout(timer);
  }, []);

    return (
      <main className="main-content">
        {loading ? <Loader /> : <h1>About me</h1>}
      </main>
    );
  }
  
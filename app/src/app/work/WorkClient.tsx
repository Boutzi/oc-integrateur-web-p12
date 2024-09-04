"use client";
import PageTitle from "@/components/Theme/PageTitle";
import Loader from "@/components/Theme/Loader";
import { useEffect, useState } from "react";

export default function WorkClient() {
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
          <PageTitle main="work." type={1} />
          <PageTitle main="Find out what I've worked on." type={2} tiny/>
        </>
      )}
    </main>
  );
}

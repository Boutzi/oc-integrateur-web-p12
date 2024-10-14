"use client";
import { WorkList } from "@/components/WorkList";
// import { fetchDataFromBucket } from "@/utils/getBucket";
// import { useEffect } from "react";

export default function Work() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetchDataFromBucket("config", "status");
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.44))] gap-4 md:gap-8 py-8">
      <WorkList />
    </main>
  );
}

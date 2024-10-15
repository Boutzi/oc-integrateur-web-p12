"use client";
import { useEffect, useState } from "react";
import { ExperienceCard, ExperienceCardProps } from "./ExperienceCard";
import { fetchDataFromBucket } from "@/utils/getBucket";

export const ExperienceContainer = () => {
  const [experience, setExperience] = useState<ExperienceCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket("experience", "experience");
        setExperience(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [experience]);

  return (
    <section className="flex flex-col gap-8">
      {experience.map((xp, index) => (
        <ExperienceCard key={index} {...xp} />
      ))}
    </section>
  );
};

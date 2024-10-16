"use client";
import { useEffect, useState } from "react";
import { ExperienceCard, ExperienceCardProps } from "./ExperienceCard";
import { fetchDataFromBucket } from "@/utils/getBucket";
import { useCurrentLocale } from "@/locales/client";

export const ExperienceContainer = () => {
  const locale = useCurrentLocale();
  const [experience, setExperience] = useState<ExperienceCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket(
          locale,
          "experience",
          "experience"
        );
        setExperience(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [experience, locale]);

  return (
    <section className="flex flex-col gap-8">
      {experience.map((xp, index) => (
        <ExperienceCard key={index} {...xp} />
      ))}
    </section>
  );
};

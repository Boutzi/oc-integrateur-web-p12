"use client";
import { useEffect, useState } from "react";
import { ExperienceCard, ExperienceCardProps } from "./ExperienceCard";
import { fetchDataFromBucket } from "@/utils/getBucket";
import { useLocale } from "next-intl";
import Loading from "@/app/[locale]/about/(me)/experience/loading";

export const ExperienceContainer = () => {
  const locale = useLocale();
  const [experience, setExperience] = useState<ExperienceCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [experience, locale]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="flex flex-col gap-8">
      {experience.map((xp, index) => (
        <ExperienceCard key={index} {...xp} />
      ))}
    </section>
  );
};

"use client";
import { useEffect, useState } from "react";
import { fetchDataFromBucket } from "@/utils/getBucket";
import { EducationCard, EducationCardProps } from "./EducationCard";
import { useCurrentLocale, useI18n } from "@/locales/client";

export const EducationContainer = () => {
  const locale = useCurrentLocale();
  const t = useI18n();
  const [education, setEducation] = useState<EducationCardProps[]>([]);
  const [certifications, setCertifications] = useState<EducationCardProps[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket(
          locale,
          "education",
          "education"
        );
        setEducation(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [locale]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket(
          locale,
          "education",
          "certifications"
        );
        setCertifications(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [locale]);

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-4xl font-semibold text-center">
        {t("education.title")}
      </h2>
      <div className="grid gap-4 grid-cols-2 max-lg:grid-cols-1">
        {education.map((course, index) => (
          <EducationCard key={index} {...course} />
        ))}
      </div>
      <h2 className="text-4xl font-semibold text-center">
        {t("certifications.title")}
      </h2>
      <div className="grid gap-4 grid-cols-2 max-lg:grid-cols-1">
        {certifications.map((certif, index) => (
          <EducationCard key={index} {...certif} />
        ))}
      </div>
    </section>
  );
};

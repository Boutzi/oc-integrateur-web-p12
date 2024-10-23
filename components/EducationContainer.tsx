"use client";
import { useEffect, useState } from "react";
import { fetchDataFromBucket } from "@/utils/getBucket";
import { EducationCard, EducationCardProps } from "./EducationCard";
import { useLocale, useTranslations } from "next-intl";
import Loading from "@/app/[locale]/about/(me)/education/loading";

export const EducationContainer = () => {
  const locale = useLocale();
  const t = useTranslations();
  const [education, setEducation] = useState<EducationCardProps[]>([]);
  const [certifications, setCertifications] = useState<EducationCardProps[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      } finally {
        setIsLoading(false);
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

  if (isLoading) {
    return <Loading />;
  }
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

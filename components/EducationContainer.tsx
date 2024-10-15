"use client";
import { useEffect, useState } from "react";
import { fetchDataFromBucket } from "@/utils/getBucket";
import { EducationCard, EducationCardProps } from "./EducationCard";

export const EducationContainer = () => {
  const [education, setEducation] = useState<EducationCardProps[]>([]);
  const [certifications, setCertifications] = useState<EducationCardProps[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket("education", "education");
        setEducation(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [education]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket("education", "certifications");
        setCertifications(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [certifications]);

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-4xl font-semibold text-center">Education</h2>
      <div className="grid gap-4 grid-cols-2 max-lg:grid-cols-1">
        {education.map((course, index) => (
          <EducationCard key={index} {...course} />
        ))}
      </div>
      <h2 className="text-4xl font-semibold text-center">Certifications</h2>
      <div className="grid gap-4 grid-cols-2 max-lg:grid-cols-1">
        {certifications.map((certif, index) => (
          <EducationCard key={index} {...certif} />
        ))}
      </div>
    </section>
  );
};

"use client";
import { useEffect, useState } from "react";
import { WorkCarousel } from "./WorkCarousel";
import { ViewerProps, WorkViewer } from "./WorkViewer";
import { useLocale, useTranslations } from "next-intl";
import { SidebarProvider } from "./ui/sidebar";
import { fetchDataFromBucket } from "@/utils/getBucket";

export const WorkContainer = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [works, setWorks] = useState<ViewerProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<ViewerProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket(locale, "work", "projects");
        console.log("Setting selectedItem:", data[0]);
        setWorks(data);
        setSelectedItem(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [locale]);

  return (
    <SidebarProvider>
      <div className="w-full max-w-6xl mx-auto mb-4">
        <div className="flex flex-col gap-4">
          <WorkCarousel
            category={`${t("work.description")}`}
            data={works}
            setSelectedItem={(id) => setSelectedItem(works[id - 1])}
          />
          <WorkViewer
            id={selectedItem?.id}
            title={selectedItem?.title}
            date={selectedItem?.date}
            image={selectedItem?.image}
            descriptionOne={selectedItem?.descriptionOne}
            descriptionTwo={selectedItem?.descriptionTwo}
            descriptionThree={selectedItem?.descriptionThree}
            imageFull={selectedItem?.imageFull}
            visitOnGithub={selectedItem?.visitOnGithub}
            technos={selectedItem?.technos}
            language={selectedItem?.language}
          />
        </div>
      </div>
    </SidebarProvider>
  );
};

"use client";
import { useEffect, useState } from "react";
import { WorkCarousel } from "./WorkCarousel";
import { ViewerProps, WorkViewer } from "./WorkViewer";
import { useLocale } from "next-intl";
import { SidebarProvider } from "./ui/sidebar";
import { fetchDataFromBucket } from "@/utils/getBucket";
import { useLoader } from "@/context/LoaderContext";
import Loading from "@/app/[locale]/work/loading";

export const WorkContainer = () => {
  const { showLoader, hideLoader } = useLoader();
  const locale = useLocale();
  const [works, setWorks] = useState<ViewerProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<ViewerProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      showLoader();
      try {
        const data = await fetchDataFromBucket(locale, "work", "projects");
        setWorks(data);
        setSelectedItem(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        hideLoader();
        setIsLoading(false);
      }
    };
    fetchData();
  }, [locale, showLoader, hideLoader]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SidebarProvider>
      <div className="w-full max-w-6xl mx-auto mb-4">
        <div className="flex flex-col gap-4">
          <WorkCarousel
            data={works}
            setSelectedItem={(id) => setSelectedItem(works[id - 1])}
          />
          <WorkViewer
            id={selectedItem?.id}
            title={selectedItem?.title ?? "Untitled"}
            date={selectedItem?.date ?? "00-00-0000"}
            image={selectedItem?.image}
            descriptionOne={selectedItem?.descriptionOne ?? ""}
            descriptionTwo={selectedItem?.descriptionTwo ?? ""}
            descriptionThree={selectedItem?.descriptionThree ?? ""}
            imageFull={selectedItem?.imageFull}
            visitOnGithub={selectedItem?.visitOnGithub ?? null}
            technos={selectedItem?.technos ?? []}
            language={selectedItem?.language ?? "Unknown language"}
          />
        </div>
      </div>
    </SidebarProvider>
  );
};

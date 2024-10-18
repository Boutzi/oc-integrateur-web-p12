/* eslint-disable @next/next/no-img-element */
"use client";
import { Section } from "./Section";
import { Spacing } from "./Spacing";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchDataFromBucket } from "@/utils/getBucket";
import { CTA } from "./CTA";
import { useUser } from "@/context/UserContext";
import { useLocale, useTranslations } from "next-intl";

interface HeroProps {
  titleIntro: string;
  titleMain: string;
  titleOutro: string;
  subFirst: string;
  subSecond: string;
}

export const Hero = () => {
  const locale = useLocale();
  const { user } = useUser();
  const [hero, setHero] = useState<HeroProps | null>(null);
  const t = useTranslations();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket(locale, "config", "hero");
        setHero(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [locale]);

  return (
    <>
      {hero && (
        <Section className="flex max-lg:flex-col items-center justify-between gap-6 min-h-[calc(100vh-400px)] max-lg:pt-8 max-lg:pb-8 max-md:pt-0">
          <div className="flex-[3] flex flex-col gap-2">
            <h1 className="font-caption text-7xl font-bold text-primary max-md:text-4xl max-sm:text-3xl max-xl:text-6xl max-lg:text-5xl">
              {hero?.titleIntro}
              <br />
              {hero?.titleMain}
              <br /> <span className="text-foreground">{hero?.titleOutro}</span>
            </h1>
            <h2 className="font-caption font-extralight text-2xl max-sm:text-xl">
              {hero?.subFirst}
              <br />
              {hero?.subSecond}
            </h2>
            <div className="max-sm:hidden">
              <Spacing size="md" />
            </div>
            <div className="flex gap-4 max-lg:m-auto max-sm:flex-col max-sm:items-center">
              <div className="flex gap-4 max-sm:items-center">
                <CTA
                  label={t("heroSection.contact")}
                  url="/contact"
                  classes=""
                  target=""
                />
                <CTA
                  label={t("heroSection.viewOnGitHub")}
                  url={`${user?.githubUrl}`}
                  classes="bg-foreground hover:bg-accent-foreground/70"
                  target="_blank"
                />
              </div>
              {user?.allowCvDownload ? (
                <CTA
                  label={t("heroSection.downloadCV")}
                  url={`${user?.cvUrl}`}
                  classes="bg-foreground hover:bg-accent-foreground/70 gap-2"
                  target="_blank"
                  icon={Download}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex-[2] ml-auto max-lg:m-auto content-end">
            <div className="relative bg-primary flex w-80 h-80 rotate-45 max-lg:hidden">
              <div className="absolute flex w-80 h-80 top-80 left-80 bg-gradient-to-tl from-background/0 from-60% to-primary/5"></div>
            </div>
          </div>
        </Section>
      )}
    </>
  );
};

"use client";
import Loader from "@/components/Theme/Loader";
import PageTitle from "@/components/Theme/PageTitle";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function SkillsClient() {
  const [loading, setLoading] = useState(true);
  const darkMode = useSelector((state: RootState) => state.local.darkMode);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`about-content ${darkMode ? "is-dark-mode" : ""}`}>
        <div className="about-content__inner-text">
          {loading ? (
            <Loader />
          ) : (
            <>
              <PageTitle main="skills." type={1} />
              <PageTitle main="I must be good for something..." type={2} tiny/>
            </>
          )}
        </div>
      </div>
    </>
  );
}

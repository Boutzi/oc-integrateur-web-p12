"use client";
import PageTitle from "@/components/Theme/PageTitle";
import Loader from "@/components/Theme/Loader";
import { useEffect, useState } from "react";
import Thumb from "@/components/Theme/Thumb";
import Thumb1 from "@/assets/blackpearl.jpg";
import Thumb2 from "@/assets/iron-throne.webp";
import Thumb3 from "@/assets/fondcombe.jpg";
import Thumb4 from "@/assets/coruscant.webp";
import Thumb5 from "@/assets/capitol.png";
import Thumb6 from "@/assets/asgard.webp";

export default function WorkClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main-content">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="work">
            <PageTitle main="work." type={1} />
            <PageTitle main="Find out what I've worked on." type={2} tiny />
            <div className="work__gallery">
              <div className="work__gallery__item">
                <Thumb title="" imageSrc={Thumb1} description="" />
                <PageTitle main="The Black Pearl" type={3} />
              </div>
              <div className="work__gallery__item">
                <Thumb title="" imageSrc={Thumb2} description="" />
                <PageTitle main="The Iron Throne" type={3} />
              </div>
              <div className="work__gallery__item">
                <Thumb title="" imageSrc={Thumb3} description="" />
                <PageTitle main="Rivendell" type={3} />
              </div>
              <div className="work__gallery__item">
                <Thumb title="" imageSrc={Thumb4} description="" />
                <PageTitle main="Coruscant" type={3} />
              </div>
              <div className="work__gallery__item">
                <Thumb title="" imageSrc={Thumb5} description="" />
                <PageTitle main="The Capitol" type={3} />
              </div>
              <div className="work__gallery__item">
                <Thumb title="" imageSrc={Thumb6} description="" />
                <PageTitle main="Asgard" type={3} />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

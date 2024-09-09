"use client";
import PageTitle from "@/components/Theme/PageTitle";
import Loader from "@/components/Theme/Loader";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Joseph from "@/assets/Joseph.jpg";
import Image from "next/image";
import CustomButton from "@/components/Theme/Button";
import Quote from "@/components/Theme/Quote";

export default function AboutClient() {
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
              <article className="about-me-content">
                <Image
                  className="about-me-content__image"
                  src={Joseph}
                  alt="Photo"
                  width={400}
                  height={400}
                />
                <div className="about-me-content__text">
                  <PageTitle main="about." type={1} />
                  <PageTitle main="Who am I?" type={2} />
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non rhoncus
                    tortor. Nunc urna lectus, consequat nec mi sit amet, pulvinar rutrum lectus.
                    Curabitur ornare nunc risus, sed interdum tortor pretium vel. In porta quis
                    ligula id interdum. Quisque laoreet nunc sem, eu dignissim arcu maximus sed. Sed
                    molestie ut erat sed semper. Sed feugiat ultrices tellus in auctor. Mauris orci
                    ante, aliquet ac arcu quis, tempor ornare mi. Ut dolor lacus, dapibus ac rutrum
                    et, mattis in lacus. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Phasellus purus ipsum, fermentum quis fringilla
                    et, laoreet eu lorem. Nulla suscipit ante vel erat pretium, ut tristique neque
                    condimentum. Proin feugiat erat et ornare sollicitudin. Vivamus in velit at
                    justo bibendum pretium.
                  </p>
                  <br />
                  <Quote
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non rhoncus
                    tortor."
                  />
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non rhoncus
                    tortor. Nunc urna lectus, consequat nec mi sit amet, pulvinar rutrum lectus.
                    Curabitur ornare nunc risus, sed interdum tortor pretium vel. In porta quis
                    ligula id interdum. Quisque laoreet nunc sem, eu dignissim arcu maximus sed. Sed
                    molestie ut erat sed semper. Sed feugiat ultrices tellus in auctor. Mauris orci
                    ante, aliquet ac arcu quis, tempor ornare mi. Ut dolor lacus, dapibus ac rutrum
                    et, mattis in lacus. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Phasellus purus ipsum, fermentum quis fringilla
                    et, laoreet eu lorem. Nulla suscipit ante vel erat pretium, ut tristique neque
                    condimentum. Proin feugiat erat et ornare sollicitudin. Vivamus in velit at
                    justo bibendum pretium.
                  </p>
                </div>
                <div className="about-me-content__cta">
                  <CustomButton url="/contact" content="Contact me" />
                </div>
              </article>
            </>
          )}
        </div>
      </div>
    </>
  );
}

"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import CustomButton from "../Theme/Button";
import PageTitle from "../Theme/PageTitle";
import Quote from "../Theme/Quote";
import RedHairHero from "../../../public/600K-redhair.png";
// import RedHairHero from "../../../public/logo-with-shadow.png";
import Logo from "../../../public/typescript.svg"
import Image from "next/image";

export default function Hero() {
  const darkMode: boolean = useSelector((state: RootState) => state.local.darkMode);
  return (
    <section className="hero-content">
      <article className="hero-content__layout">
        <div className="hero">
          <PageTitle main="Precision. " secondary="In every pixel." />
          <div className="hero__subtitle">
            <Quote content="Hi there! My name is Joe. I’m a Front-End developer based in Bordeaux, France." />
          </div>
        </div>
        <Image src={RedHairHero} alt="RedHair Digital Painting" height={450}/>
        {/* <Logo alt="Main Logo"/> */}
      </article>
      <div className="hero-content__cta">
      <CustomButton url="/work" content="Discover" reverse />
      <CustomButton url="/contact" content="Get Started" />
      </div>
    </section>
  );
}

"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function Hero() {
  const darkMode:boolean = useSelector((state: RootState) => state.local.darkMode);
  return (
    <section className="hero">
      <h1 className="hero__title">
        Precision. <span className={darkMode ? "hero__title--variant is-dark-mode" : "hero__title--variant"}>In every pixel.</span>
      </h1>
      <h2 className="hero__subtitle">
        Hi there! My name is Joe.
        <br />
        I’m a Front-End developer.
      </h2>
      
      <h3 className={darkMode ? "hero__location is-dark-mode" : "hero__location"}>
      <FontAwesomeIcon icon={faLocationDot} className={darkMode ? "hero__location__font-awesome is-dark-mode" : "hero__location__font-awesome"}/>
        Bordeaux, France.
      </h3>
    </section>
  );
}

"use client";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type AnimationType = "slide-x" | "slide-y" | "-slide-x" | "-slide-y" | "fade";

interface SectionProps {
  className?: string;
  animated?: boolean;
  animationType?: AnimationType;
  animationDelay?: number;
}

export const ScrollAnimation = ({
  className,
  animated = true,
  animationType = "slide-x",
  animationDelay = 0,
  children,
}: PropsWithChildren<SectionProps>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); 
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1440);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && !isSmallScreen) {
          setIsVisible(true);
          setHasAnimated(true); // Marquer comme animé
        }
      },
      { threshold: 0.4 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, isSmallScreen]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animationProps =
    animationType === "slide-x"
      ? {
          initial: { x: "-100%", opacity: 0 },
          animate: isVisible
            ? { x: 0, opacity: 1 }
            : { x: "-100%", opacity: 0 },
          transition: {
            duration: 0.7,
            delay: isVisible ? animationDelay / 1000 : 0,
          },
        }
      : animationType === "slide-y"
      ? {
          initial: { y: "-100%", opacity: 0 },
          animate: isVisible
            ? { y: 0, opacity: 1 }
            : { y: "-100%", opacity: 0 },
          transition: {
            duration: 0.7,
            delay: isVisible ? animationDelay / 1000 : 0,
          },
        }
      : animationType === "-slide-x"
      ? {
          initial: { x: "200%", opacity: 0 },
          animate: isVisible ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 },
          transition: {
            duration: 0.7,
            delay: isVisible ? animationDelay / 1000 : 0,
          },
        }
      : animationType === "-slide-y"
      ? {
          initial: { y: "200%", opacity: 0 },
          animate: isVisible ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
          transition: {
            duration: 0.7,
            delay: isVisible ? animationDelay / 1000 : 0,
          },
        }
      : {
          initial: { opacity: 0 },
          animate: isVisible ? { opacity: 1 } : { opacity: 0 },
          transition: {
            duration: 1.3,
            delay: isVisible ? animationDelay / 1000 : 0,
          },
        };

  // Ne pas afficher le contenu si l'écran est petit
  if (isSmallScreen) {
    return <div className={`${className || ""}`}>{children}</div>;
  }

  const ScrollAnimationContent = animated ? motion.div : "div";

  return (
    <ScrollAnimationContent
      ref={ref}
      className={`${className || ""}`}
      {...(animated ? animationProps : {})}
    >
      {children}
    </ScrollAnimationContent>
  );
};

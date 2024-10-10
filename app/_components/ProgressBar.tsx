"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Progress } from "./ui/progress";

export function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let animationFrameId: number;
    let start: number;
    const timer = window.setTimeout; // Utilisation de const ici

    const handleStart = () => {
      setProgress(0);
      setVisible(true);
      start = performance.now();
      
      const updateProgress = (currentTime: number) => {
        const elapsed = (currentTime - start) / 1000;
        const newProgress = Math.min((elapsed / 1) * 100, 100); // 1 seconde pour 100%
        setProgress(newProgress);

        if (newProgress < 100) {
          animationFrameId = requestAnimationFrame(updateProgress);
        }
      };

      animationFrameId = requestAnimationFrame(updateProgress);
    };

    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => setVisible(false), 200);
    };

    handleStart();
    const timeoutId = timer(() => handleComplete(), 1000); // Utilisation de const ici

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId); // Utilisation de const ici
    };
  }, [pathname]);

  return (
    visible && (
      <div>
        <Progress value={progress} className="w-full h-0.5 fixed z-50 rounded-none" />
      </div>
    )
  );
}

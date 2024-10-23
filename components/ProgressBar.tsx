"use client";
import { useState, useEffect } from "react";
import { Progress } from "./ui/progress";

interface ProgressBarProps {
  onComplete: () => void;
}

export function ProgressBar({ onComplete }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let animationFrameId: number;
    let start: number;

    const handleStart = () => {
      setProgress(0);
      setVisible(true);
      start = performance.now();

      const updateProgress = (currentTime: number) => {
        const elapsed = (currentTime - start) / 1000;
        const newProgress = Math.min((elapsed / 1) * 100, 100);
        setProgress(newProgress);

        if (newProgress < 100) {
          animationFrameId = requestAnimationFrame(updateProgress);
        } else {
          setTimeout(() => {
            setVisible(false);
            onComplete();
          }, 200);
        }
      };

      animationFrameId = requestAnimationFrame(updateProgress);
    };

    handleStart();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return (
    visible && (
      <div>
        <Progress
          value={progress}
          className="w-full h-0.5 fixed top-0 z-50 rounded-none"
        />
      </div>
    )
  );
}

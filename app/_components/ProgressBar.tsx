"use client"; // Exécuté côté client

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation"; // Utilise ces hooks pour détecter le changement d'URL
import { Progress } from "./ui/progress";

export function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname(); // Récupère le chemin actuel
  const searchParams = useSearchParams(); // Récupère les paramètres de recherche

  useEffect(() => {
    const handleStart = () => {
      setProgress(0);
      setVisible(true);

      // Démarre l'incrémentation de la barre de progression
      const start = Date.now();
      const timer = window.setInterval(() => {
        const elapsed = Date.now() - start;
        const newProgress = Math.min((elapsed / 1000) * 100, 100);
        setProgress(newProgress);
      }, 100); // Mettez à jour toutes les 100 ms

      // Nettoyage pour effacer l'intervalle lorsque la progression est terminée
      return () => clearInterval(timer);
    };

    const handleComplete = () => {
      setProgress(100); // Mettez la progression à 100%
      setTimeout(() => setVisible(false), 300); // Cachez la barre après 300 ms
    };

    // Commence la progression à chaque changement de chemin ou de paramètres de recherche
    const startLoading = handleStart();
    handleComplete(); // Appelle ici pour simuler la complétion immédiate lors de l'affichage

    return () => {
      if (startLoading) startLoading(); // Nettoie l'intervalle
    };
  }, [pathname, searchParams]); // Démarre l'effet à chaque changement de chemin ou de paramètres

  return (
    visible && (
      <div>
        <Progress value={progress} className="w-full h-0.5 fixed z-50 rounded-none" />
      </div>
    )
  );
}

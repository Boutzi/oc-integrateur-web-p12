"use client";
import { useEffect } from "react";
import { useLoader } from "@/context/LoaderContext";
import { ProgressBar } from "@/components/ProgressBar";

export const LoaderWrapper = () => {
  const { isLoading, showLoader, hideLoader } = useLoader();

  useEffect(() => {
    // Vérifiez d'abord si le loader est déjà affiché
    if (!isLoading) {
      showLoader(); // Affiche le loader uniquement s'il n'est pas déjà affiché

      // Simuler le chargement des données
      const timeoutId = setTimeout(() => {
        hideLoader(); // Cache le loader après 2 secondes
      }, 2000);

      return () => {
        clearTimeout(timeoutId); // Nettoie le timeout lors du démontage
      };
    }
  }, [isLoading, showLoader, hideLoader]); // Ajout d'isLoading comme dépendance

  return <>{isLoading && <ProgressBar />}</>; // Affiche ProgressBar si isLoading est true
};

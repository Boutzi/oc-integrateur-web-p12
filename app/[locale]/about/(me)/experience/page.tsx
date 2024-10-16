import { ExperienceContainer } from "@/components/ExperienceContainer";

// Définition des types pour les paramètres
interface Params {
  locale: string;
}

// Fonction pour générer les paramètres statiques
export async function generateStaticParams() {
  const locales = ["en", "fr", "kr"];
  const paths = locales.map((locale) => ({
    locale,
  }));

  return paths;
}

// Composant Experience
export default function Experience({ params }: { params: Params }) {
  return <ExperienceContainer />;
}

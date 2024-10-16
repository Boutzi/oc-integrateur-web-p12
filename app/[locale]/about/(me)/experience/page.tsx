import { ExperienceContainer } from "@/components/ExperienceContainer";

export async function generateStaticParams() {
  const locales = ["en", "fr", "kr"];
  const paths = locales.map((locale) => ({
    locale,
  }));

  return paths;
}

export default function Experience() {
  return <ExperienceContainer />;
}

import SkillsContainer from "@/components/SkillsContainer";

export async function generateStaticParams() {
  const locales = ["en", "fr", "kr"];
  const paths = locales.map((locale) => ({
    locale,
  }));

  return paths;
}

export default function Skills() {
  return <SkillsContainer />;
}

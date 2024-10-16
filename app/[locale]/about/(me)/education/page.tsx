import { EducationContainer } from "@/components/EducationContainer";

export async function generateStaticParams() {
  const locales = ["en", "fr", "kr"];
  const paths = locales.map((locale) => ({
    locale,
  }));

  return paths;
}

export default function Education() {
  return <EducationContainer />;
}

import { Bio } from "@/components/Bio";

export async function generateStaticParams() {
  const locales = ["en", "fr", "kr"];
  const paths = locales.map((locale) => ({
    locale,
  }));

  return paths;
}

export default function About() {
  return <Bio />;
}

import { ExperienceContainer } from "@/components/ExperienceContainer";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Experience({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <ExperienceContainer />;
}

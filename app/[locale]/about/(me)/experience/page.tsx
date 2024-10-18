import { ExperienceContainer } from "@/components/ExperienceContainer";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Experience() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return <ExperienceContainer />;
}

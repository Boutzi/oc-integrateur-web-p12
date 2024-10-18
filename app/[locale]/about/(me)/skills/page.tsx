import SkillsContainer from "@/components/SkillsContainer";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Skills() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return <SkillsContainer />;
}

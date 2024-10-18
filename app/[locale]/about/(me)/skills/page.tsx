import SkillsContainer from "@/components/SkillsContainer";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Skills({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <SkillsContainer />;
}

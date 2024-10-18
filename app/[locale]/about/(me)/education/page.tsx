import { EducationContainer } from "@/components/EducationContainer";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Education() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return <EducationContainer />;
}

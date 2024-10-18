import { EducationContainer } from "@/components/EducationContainer";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Education({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <EducationContainer />;
}

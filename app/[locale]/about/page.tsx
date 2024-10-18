import { Bio } from "@/components/Bio";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function About() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return <Bio />;
}

import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}
interface AboutLayoutParams {
  params: {
    locale: string;
  };
}
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("layout.contact"),
    description: t("layout.contactDescription"),
  };
}

export default function AboutLayout({
  children,
  params: { locale },
}: AboutLayoutProps & AboutLayoutParams) {
  unstable_setRequestLocale(locale);
  return children;
}

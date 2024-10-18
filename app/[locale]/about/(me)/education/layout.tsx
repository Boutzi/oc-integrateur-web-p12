import { getTranslations } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("layout.education"),
    description: t("layout.educationDescription"),
  };
}

interface AboutLayoutParams {
  params: {
    locale: string;
  };
}

export default function AboutLayout({
  children,
  params: { locale },
}: AboutLayoutProps & AboutLayoutParams) {
  unstable_setRequestLocale(locale);
  return children;
}

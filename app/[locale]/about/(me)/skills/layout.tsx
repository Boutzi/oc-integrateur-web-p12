import { getI18n } from "@/locales/server";
import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

export const metadata = async () => {
  const t = await getI18n();

  return {
    title: t("layout.skills"),
    description: t("layout.skillsDescription"),
  };
};

export default function AboutLayout({ children }: AboutLayoutProps) {
  return children;
}

import { unstable_setRequestLocale } from "next-intl/server";
import HomeClient from "./HomeClient";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <HomeClient />;
}

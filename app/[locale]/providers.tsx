import { I18nProviderClient } from "@/locales/client";
import { setStaticParamsLocale } from "next-international/server";
import { PropsWithChildren } from "react";

export async function generateStaticParams() {
  const locales = ["en", "fr", "kr"];
  const paths = locales.map((locale) => ({
    locale,
  }));

  return paths;
}

export const Providers = (props: PropsWithChildren<{ locale: string }>) => {
  setStaticParamsLocale(props.locale);
  return (
    <I18nProviderClient locale={props.locale}>
      {props.children}
    </I18nProviderClient>
  );
};

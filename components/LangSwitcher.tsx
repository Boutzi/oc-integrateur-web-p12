"use client";

import * as React from "react";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { FranceIcon } from "./icons/FranceIcon";
import { UnitedKingdomIcon } from "./icons/UnitedKingdomIcon";
import { KoreaIcon } from "./icons/KoreaIcon";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Language = "en" | "fr" | "kr";

const languages: {
  [key in Language]: {
    name: string;
    Icon: React.ComponentType<{ className?: string }>;
  };
} = {
  en: { name: "English", Icon: UnitedKingdomIcon },
  fr: { name: "Français", Icon: FranceIcon },
  kr: { name: "한국어", Icon: KoreaIcon },
};

export default function LangSwitcher() {
  const locale = useCurrentLocale() as Language;
  const changeLocale = useChangeLocale();

  const handleLocaleChange = (newLocale: Language) => {
    changeLocale(newLocale);
  };

  const CurrentLanguage = ({ language }: { language: Language }) => {
    const { name, Icon } = languages[language];
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Icon className="w-5 h-5 rounded-full" />
        <span className="sr-only">{name}</span>
      </div>
    );
  };

  return (
    <Select value={locale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-9 h-9 p-0 border-none hover:bg-accent/50 focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-none">
        <SelectValue>
          <CurrentLanguage language={locale} />
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([code, { name, Icon }]) => (
          <SelectItem key={code} value={code as Language}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Icon className="mr-2 h-5 w-5 rounded-full" />
                <span>{name}</span>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

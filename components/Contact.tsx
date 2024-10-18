import { Badge } from "./ui/badge";
import { Section } from "./Section";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollAnimation } from "./ScrollAnimation";
import { useTranslations } from "next-intl";

export const Contact = () => {
  const t = useTranslations();

  return (
    <Section className="flex flex-col items-start justify-between gap-4">
      <Badge
        variant="outline"
        className="rounded-full text-primary border-primary"
      >
        {t("contact.getInTouch")}
      </Badge>
      <h2 className="font-caption font-extralight text-5xl max-sm:text-3xl">
        {t("contact.openToOpportunities")}{" "}
      </h2>
      <h3 className="font-caption font-semibold text-2xl">
        {t("contact.connect")}{" "}
      </h3>
      <Link href={"/contact"} passHref>
        <ScrollAnimation animated={true} animationType="slide-x">
          <Button className="rounded-full font-semibold bg-accent-foreground flex items-center my-8">
            {t("contact.contactMe")}
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </ScrollAnimation>
      </Link>
      <h4 className="text-sm">{t("contact.invitation")} </h4>
    </Section>
  );
};

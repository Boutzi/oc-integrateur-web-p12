import { Badge } from "./ui/badge";
import { Section } from "./Section";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollAnimation } from "./ScrollAnimation";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start justify-between gap-4">
      <Badge
        variant="outline"
        className="rounded-full text-primary border-primary"
      >
        Get in touch
      </Badge>
      <h2 className="font-caption font-extralight text-5xl max-sm:text-3xl">
        Open to new opportunities
      </h2>
      <h3 className="font-caption font-semibold  text-2xl">
        Let’s connect and make it happen!
      </h3>
      <Link href={"/contact"} passHref>
        <ScrollAnimation animated={true} animationType="slide-x">
          <Button className="rounded-full font-semibold bg-accent-foreground flex items-center my-8">
            Contact me
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </ScrollAnimation>
      </Link>
      <h4 className="text-sm">
        If you have a question, a job opportunity, or a project in mind, don’t
        hesitate to reach out. <br/>I’m eager to connect and discuss how we can work
        together.
      </h4>
    </Section>
  );
};

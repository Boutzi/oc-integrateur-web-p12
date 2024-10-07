import { Badge } from "@/app/_components/ui/badge";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start justify-between gap-4">
      <Badge
        variant="outline"
        className="rounded-full text-primary border-primary"
      >
        Get in touch
      </Badge>
      <h2 className="font-caption font-extralight text-4xl max-sm:text-xl">
        Open to new opportunities.
        <br /> Let’s connect and make it happen.
      </h2>
      <h3>
        If you have a question, a job opportunity, or a project in mind, don’t
        hesitate to reach out. I’m eager to connect and discuss how we can work
        together.
      </h3>
    </Section>
  );
};

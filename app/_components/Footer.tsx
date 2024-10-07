import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { JoeIcon } from "./icons/JoeIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer>
      <Section className="flex border-t border-accent/70 w-full pt-4 pb-10 justify-between items-center">
        <div>
          <Link href={"/"}>
            <JoeIcon size={64} />
          </Link>
        </div>
        <div className="flex gap-4">
          <Link target="_blank" href={"https://github.com/Boutzi"}>
            <GithubIcon
              size={24}
              className="text-foreground/50 hover:text-primary"
            />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/joseph-girardi/"}
          >
            <LinkedinIcon
              size={24}
              className="text-foreground/50 hover:text-primary"
            />
          </Link>
        </div>
      </Section>
    </footer>
  );
};

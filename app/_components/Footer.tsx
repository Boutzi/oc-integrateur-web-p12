import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { JoeIcon } from "./icons/JoeIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { Section } from "./Section";
import { ArrowBigUp } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

export const Footer = () => {
  return (
    <footer className="relative">
      <ScrollAnimation
        animated={true}
        animationType="fade"
        className="absolute right-4 bottom-4 group"
        animationDelay={1000}
      >
        <Link href={"/"}>
          <ArrowBigUp
            size={48}
            className="bg-accent/30 rounded-lg text-accent-foreground/70 animation-transform animate-pulse hover:bg-accent hover:text-accent-foreground hover:animate-none max-xl:hidden"
          />
        </Link>
      </ScrollAnimation>
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

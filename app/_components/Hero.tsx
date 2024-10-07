/* eslint-disable @next/next/no-img-element */
import { Button } from "@/app/_components/ui/button";
import { Section } from "./Section";
import { Spacing } from "./Spacing";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-center justify-between gap-6">
      <div className="flex-[3] flex flex-col gap-2">
        <h1 className="font-caption text-5xl font-bold text-primary max-md:text-4xl max-sm:text-3xl">
          Hi there! My name is Joe.<br/> I’m a Front-End developer.
        </h1>
        <h2 className="font-caption font-extralight text-2xl max-sm:text-xl">
          Let&apos;s create something amazing together, whether remote or
          on-site, I&apos;m ready to code.
        </h2>
        <div className="max-sm:hidden">
        <Spacing size="sm" />
        </div>
        <div className="flex gap-4 max-lg:m-auto max-sm:mb-6">
          <Button className="rounded-full">Get Started</Button>
          <Button className="rounded-full bg-foreground">View on GitHub</Button>
          <Button className="rounded-full bg-foreground">Discover</Button>
        </div>
      </div>
      <div className="flex-[2] ml-auto max-lg:m-auto content-end">
        <img
          src="https://avatars.githubusercontent.com/u/130697355?v=4"
          className="w-64 m-auto max-w-lg rounded-full max-md:w-64"
          alt="Joe's picture"
        />
      </div>
    </Section>
  );
};

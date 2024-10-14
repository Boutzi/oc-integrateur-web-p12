/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "./ui/button";
import { Section } from "./Section";
import { Spacing } from "./Spacing";
import Link from "next/link";
import { Download } from "lucide-react";

export const Hero = () => {
  const cvUrl = process.env.NEXT_PUBLIC_CV_URL;
  // const [data, setData] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchCVFromBucket();
  //     setResume(data);
  //   };

  //   fetchData();
  // }, []);
  return (
    // min-h-[calc(100vh-270px)]
    <Section className="flex max-lg:flex-col items-center justify-between gap-6 min-h-[calc(100vh-400px)] max-lg:pt-8 max-lg:pb-8 max-md:pt-0">
      <div className="flex-[3] flex flex-col gap-2">
        <h1 className="font-caption text-7xl font-bold text-primary max-md:text-4xl max-sm:text-3xl max-xl:text-6xl max-lg:text-5xl">
          Hi there!
          <br />
          My name is Joe.
          <br />{" "}
          <span className="text-foreground">I’m a Front-End Developer.</span>
        </h1>
        <h2 className="font-caption font-extralight text-2xl max-sm:text-xl">
          Let&apos;s create something amazing together, <br />
          whether remote or on-site, I&apos;m reaDy to code.
        </h2>
        <div className="max-sm:hidden">
          <Spacing size="md" />
        </div>
        <div className="flex gap-4 max-lg:m-auto max-sm:flex-col max-sm:items-center">
          <div className="flex gap-4 max-sm:items-center">
            <Link href={"/contact"}>
              <Button className="rounded-full">Contact me</Button>
            </Link>
            <Link href={"https://github.com/Boutzi"} target="_blank">
              <Button className="rounded-full bg-foreground hover:bg-accent-foreground/70">
                View on GitHub
              </Button>
            </Link>
          </div>
          <Link
            href={`${cvUrl}`}
            target="_blank"
            prefetch={false}
            rel="noopener noreferrer"
          >
            <Button className="rounded-full bg-foreground hover:bg-accent-foreground/70 flex gap-2">
              <Download size={16} /> Download CV
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-[2] ml-auto max-lg:m-auto content-end">
        <img
          src="https://avatars.githubusercontent.com/u/130697355?v=4"
          className="w-96 m-auto max-w-lg rounded-full max-md:w-64"
          alt="Joe's picture"
        />
      </div>
    </Section>
  );
};

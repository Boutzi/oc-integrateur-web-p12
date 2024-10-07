import { Badge } from "./ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { PythonIcon } from "./icons/PythonIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start justify-between gap-4">
      <Badge
        variant="outline"
        className="rounded-full text-primary border-primary"
      >
        Skills
      </Badge>
      <h2 className="font-caption font-extralight text-4xl max-sm:text-xl">
        I love working on...
      </h2>

      <div className="flex max-md:flex-col gap-8">
        <div className="flex-1">
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 ">
            <ReactIcon
              size={64}
              className="animate-spin"
              style={{ animationDuration: "20s" }}
            />
          </div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
            React.js
          </h3>
          <p className="text-sm text-muted-foreground">
            Experienced in building dynamic, responsive web applications using
            React and Next.js, with a focus on server-side rendering, static
            site generation, and efficient routing for enhanced performance
          </p>
        </div>

        <div className="flex-1">
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 ">
            <TailwindIcon size={64} />
          </div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
            Tailwind CSS
          </h3>
          <p className="text-sm text-muted-foreground">
            Proficient in using Tailwind CSS to create custom, responsive
            designs quickly, ensuring clean and scalable UI development with
            utility-first styling.
          </p>
        </div>

        <div className="flex-1">
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 ">
            <PythonIcon size={64} />
          </div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
            Python
          </h3>
          <p className="text-sm text-muted-foreground">
            Skilled in Python programming for various applications, from web
            development to data manipulation, with a focus on clean code and
            automation.
          </p>
        </div>
      </div>
    </Section>
  );
};

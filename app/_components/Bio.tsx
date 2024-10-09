/* eslint-disable @next/next/no-img-element */
import { Card } from "./ui/card";

export const Bio = () => {
  return (
    <section className="flex flex-col gap-8">
    <div className="rounded-lg h-50 overflow-hidden">
      <img
        alt="content"
        className="object-cover object-center h-full w-full"
        src="https://media.licdn.com/dms/image/v2/D5616AQFRUI1yi0J6Rg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1702319166552?e=1733961600&v=beta&t=BjRd6tZXhY9mQIb7bMZLVPPBI4NVJfCdLdTmrN4ruq0"
      />
    </div>
      <Card className="container mx-auto flex flex-col p-8 gap-4">
        <div className="">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center ">
                <img
                  src="https://avatars.githubusercontent.com/u/130697355?v=4"
                  className="w-32 m-auto max-w-lg rounded-full max-md:w-64"
                  alt="Joe's picture"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-lg">
                  Joseph Girardi
                </h2>
                <div className="w-12 h-1 bg-primary rounded mt-4 mb-4"></div>
                <p className="text-base text-accent-foreground/60">
                  Front-End developer
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-accent sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <h2 className="font-caption text-2xl font-bold leading-relaxed max-md:text-lg">Who am I?</h2>
              <p className="leading-relaxed text-lg mb-4">
                I am a versatile person, often described as
                &quot;multipotential&quot;. I have explored different
                professional horizons, and today I can say that I thrive in
                various sectors.
                <br />
                <br />
                My organizational skills and attention to detail are key assets.
                I take on projects of all sizes and contribute to their
                development to improve their quality and efficiency.
                <br />
                <br />I strive to become a key player in every company I work
                for, not by imposing my ideas, but by relying on the quality of
                my work.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

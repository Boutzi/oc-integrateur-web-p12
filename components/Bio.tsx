/* eslint-disable @next/next/no-img-element */
"use client";
import { useUser } from "@/context/UserContext";
import { Card } from "./ui/card";

const calculateAge = (birthDate: string): number => {
  const [day, month, year] = birthDate.split("-").map(Number);
  const birth = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
};

export const Bio = () => {
  const { user } = useUser();

  if (!user || !user.birth) {
    return <div>Loading...</div>;
  }

  const age = calculateAge(user.birth);
  return (
    <section className="flex flex-col gap-8">
      <div className="rounded-lg h-50 overflow-hidden max-md:hidden mx-auto ">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src="https://media.licdn.com/dms/image/v2/D5616AQFRUI1yi0J6Rg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1702319166552?e=1733961600&v=beta&t=BjRd6tZXhY9mQIb7bMZLVPPBI4NVJfCdLdTmrN4ruq0"
        />
      </div>
      <Card className="mx-auto flex flex-col p-8 gap-4 w-full">
        <div className="">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center">
                <img
                  src={`${user?.profilePictureUrl}`}
                  className="w-32 m-auto max-w-lg rounded-full max-md:w-32"
                  alt="Joe's picture"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-lg">
                  {user?.firstName} {user?.lastName}
                </h2>
                <span className="text-xs text-accent-foreground/70">
                  {age} years old
                </span>
                <div className="w-12 h-1 bg-primary rounded mt-4 mb-4"></div>
                <p className="text-base text-accent-foreground/60">
                  {user?.mainRole}
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-accent sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h2 className="font-caption text-2xl font-bold leading-relaxed max-md:text-lg">
                Who am I?
              </h2>
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

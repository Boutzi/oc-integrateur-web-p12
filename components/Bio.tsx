"use client";
import { useUser } from "@/context/UserContext";
import { Card } from "./ui/card";
import Image from "next/image";
import { useI18n } from "@/locales/client";

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
  const t = useI18n(); // Utilisation de la fonction de traduction

  if (!user || !user.birth) {
    return <div>Loading...</div>;
  }

  const age = calculateAge(user.birth);
  return (
    <section className="flex flex-col gap-8">
      <div className="rounded-lg overflow-hidden max-md:hidden mx-auto relative group w-full h-52">
        <Image
          src="https://oc-integrateur-web-p12.s3.eu-west-3.amazonaws.com/banners/profile.jpg"
          alt="content"
          className="w-full h-auto object-cover object-center rounded-lg"
          fill
        />
      </div>
      <Card className="mx-auto flex flex-col p-8 gap-4 w-full">
        <div className="">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center">
                <Image
                  src={`${user?.profilePictureUrl}`}
                  className="w-32 m-auto max-w-lg rounded-full max-md:w-32"
                  width={128}
                  height={128}
                  alt={t("bio.profilePictureAlt")} // Traduction pour l'ALT de l'image
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-lg">
                  {user?.firstName} {user?.lastName}
                </h2>
                <span className="text-xs text-accent-foreground/70">
                  {age} {t("bio.yearsOld")} {/* Traduction pour "years old" */}
                </span>
                <div className="w-12 h-1 bg-primary rounded mt-4 mb-4"></div>
                <p className="text-base text-accent-foreground/60">
                  {user?.mainRole}
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-accent sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h2 className="font-caption text-2xl font-bold leading-relaxed max-md:text-lg">
                {t("bio.whoAmI")} {/* Traduction pour "Who am I?" */}
              </h2>
              <p className="leading-relaxed text-lg mb-4">
                {t("bio.introduction")} {/* Traduction de l'introduction */}
                <br />
                <br />
                {t("bio.skills")} {/* Traduction des compétences */}
                <br />
                <br />
                {t("bio.keyPlayer")}{" "}
                {/* Traduction de "I strive to become a key player..." */}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

"use client";
import { useStatus } from "@/context/StatusContext";
import { Section } from "./Section";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

export const Form = () => {
  const { setMode } = useStatus();
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const companyRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const t = useTranslations();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (
        firstNameRef.current &&
        lastNameRef.current &&
        emailRef.current &&
        companyRef.current &&
        messageRef.current
      ) {
        const contactData = {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          company: companyRef.current.value,
          message: messageRef.current.value,
        };

        setIsLoading(true);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        });

        if (response.ok) {
          setMode("messageSent");
          setIsLoading(false);
          firstNameRef.current.value = "";
          lastNameRef.current.value = "";
          emailRef.current.value = "";
          companyRef.current.value = "";
          messageRef.current.value = "";
        } else {
          setMode("messageError");
          setIsLoading(false);
          console.error("Failed to send message:", response.statusText);
        }
      }
    } catch (error) {
      setMode("messageError");
      setIsLoading(false);
      console.error("Error while sending message:", error);
    }
  };

  return (
    <Section className="flex flex-col items-start justify-between gap-4 max-lg:pt-8 max-lg:pb-8">
      <form
        className="m-auto mr-56 ml-56 max-lg:mr-24 max-lg:ml-24 max-sm:mr-8 max-sm:ml-8"
        onSubmit={handleSubmit}
      >
        <h1 className="font-caption text-5xl font-bold text-primary max-md:text-4xl max-sm:text-3xl">
          {t("contact.getInTouch")}
        </h1>
        <h2 className="font-caption font-extralight text-xl max-sm:text-xl">
          {t("contact.invitation")}
        </h2>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex gap-4 max-lg:flex-col">
            <div className="flex flex-[2] flex-col gap-1">
              <label htmlFor="first-name" className="text-xs">
                {t("contact.firstName")}
                <span className="text-primary ml-1 text-md">*</span>
              </label>
              <Input
                ref={firstNameRef}
                id="first-name"
                className="flex-1 rounded-lg p-3 hover:bg-accent/20"
                required
              />
            </div>
            <div className="flex flex-[2] flex-col gap-1">
              <label htmlFor="last-name" className="text-xs">
                {t("contact.lastName")}
                <span className="text-primary ml-1 text-md">*</span>
              </label>
              <Input
                ref={lastNameRef}
                id="last-name"
                className="flex-1 rounded-lg p-3 hover:bg-accent/20"
                required
              />
            </div>
          </div>
          <div className="flex gap-4 max-lg:flex-col">
            <div className="flex flex-[2] flex-col gap-1">
              <label htmlFor="email" className="text-xs">
                {t("contact.email")}
                <span className="text-primary ml-1 text-md">*</span>
              </label>
              <Input
                ref={emailRef}
                id="email"
                className="flex-1 rounded-lg p-3 hover:bg-accent/20"
                required
              />
            </div>
            <div className="flex flex-[2] flex-col gap-1">
              <label htmlFor="company" className="text-xs">
                {t("contact.company")}
              </label>
              <Input
                ref={companyRef}
                id="company"
                className="flex-1 rounded-lg p-3 hover:bg-accent/20"
              />
            </div>
          </div>
          <div className="flex flex-[2] flex-col gap-1">
            <label htmlFor="message" className="text-xs">
              {t("contact.yourMessage")}
              <span className="text-primary ml-1 text-md">*</span>
            </label>
            <Textarea
              ref={messageRef}
              id="message"
              placeholder={t("contact.messagePlaceholder")}
              className="flex-1 rounded-lg p-3 hover:bg-accent/20 resize-y min-h-[130px]"
              required
            />
          </div>
          <div className="m-auto items-center mt-4">
            <Button className="relative w-36 font-semibold text-lg">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span className="sr-only">Loading...</span>
                </>
              ) : (
                t("contact.sendButton")
              )}
            </Button>
          </div>
        </div>
      </form>
    </Section>
  );
};

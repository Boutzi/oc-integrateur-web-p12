"use client";
import PageTitle from "@/components/Theme/PageTitle";
import Loader from "@/components/Theme/Loader";
import { useEffect, useState } from "react";
import CustomButton from "@/components/Theme/Button";

export default function ContactClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main-content">
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageTitle main="contact." type={1} />
          <PageTitle main="Let's talk! " secondary="I’m always up for a chat!" type={2} tiny/>
          <form className="contact-form">
            <label htmlFor="text">First name:</label>
            <input name="text" type="text" className="contact-form__input" />
            <label htmlFor="text2">Last name:</label>
            <input name="text2" type="text" className="contact-form__input" />
            <label htmlFor="text3">Message:</label>
            <textarea name="text3" rows={4} cols={100} className="contact-form__input" />
            <CustomButton content="Envoyer" url="#" />
          </form>
        </>
      )}
    </main>
  );
}

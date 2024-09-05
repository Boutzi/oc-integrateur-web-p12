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
          <div className="contact">
            <PageTitle main="contact." type={1} />
            <PageTitle main="Let's talk! " secondary="I’m always up for a chat!" type={2} tiny />
            <form className="contact-form">
              <div className="contact-form__item">
                <label htmlFor="text" className="contact-form__item__label">First name</label>
                <input name="text" type="text" className="contact-form__item__input" />
              </div>
              <div className="contact-form__item">
                <label htmlFor="text2" className="contact-form__item__label">Last name</label>
                <input name="text2" type="text" className="contact-form__item__input" />
              </div>
              <div className="contact-form__item">
                <label htmlFor="text" className="contact-form__item__label">Phone</label>
                <input name="text" type="tel" className="contact-form__item__input" pattern="^\+?[0-9\s\-]{7,15}$"/>
                <small className="contact-form__item__small">Format attendu : +33 6 12 34 56 78</small>
              </div>
              <div className="contact-form__item">
                <label htmlFor="text2" className="contact-form__item__label">Email</label>
                <input name="text2" type="email" className="contact-form__item__input" />
              </div>
              <div className="contact-form__item contact-form__item--textarea">
                <label htmlFor="text3" className="contact-form__item__label">Message</label>
                <textarea name="text3" rows={6} cols={100} className="contact-form__item__input" />
              </div>
              <div className="contact-form__submit">
              <CustomButton content="Envoyer" url="#" />
              </div>
            </form>
          </div>
        </>
      )}
    </main>
  );
}

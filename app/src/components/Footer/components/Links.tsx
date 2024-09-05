"use client";
import Link from "next/link";
import MainLogo from "@/assets/logo-footer.svg";
import GitHubLogo from "@/assets/github.svg";
import LinkedinLogo from "@/assets/linkedin.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function Links() {
  const darkMode: boolean = useSelector((state: RootState) => state.local.darkMode);
  return (
    <div className="footer-links">
      <Link
        className="footer-links__link"
        href={"https://github.com/Boutzi"}
        target="_blank"
        aria-label="Visit my GitHub account"
      >
        <GitHubLogo
          alt="Logo"
          className={`footer-links__link-logo ${darkMode ? "is-dark-mode" : ""}`}
        />
      </Link>
      <MainLogo alt="Logo" className={`footer-links__logo ${darkMode ? "is-dark-mode" : ""}`} />
      <Link
        className="footer-links__link"
        href={"https://www.linkedin.com/in/joseph-girardi/"}
        target="_blank"
        aria-label="Visit my Linkedin account"
      >
        <LinkedinLogo
          alt="Logo"
          className={`footer-links__link-logo ${darkMode ? "is-dark-mode" : ""}`}
        />
      </Link>
    </div>
  );
}

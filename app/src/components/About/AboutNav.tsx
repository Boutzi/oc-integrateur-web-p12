"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faDownload, faScrewdriverWrench, faUser } from "@fortawesome/free-solid-svg-icons";

interface StyledLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

function StyledLink({ href, className, children }: StyledLinkProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function AboutNav() {
  const pathname: string = usePathname();
  const darkMode: boolean = useSelector((state: RootState) => state.local.darkMode);
  return (
    <>
      <nav className="about-nav">
        <StyledLink
          className={`about-nav__link ${pathname === "/about/me" ? "active" : ""}${
            darkMode ? " is-dark-mode" : ""
          }`}
          href={"/about/me"}
        >
          <FontAwesomeIcon
            icon={faUser}
            className={
              darkMode
                ? "about-nav__link__font-awesome is-dark-mode"
                : "about-nav__link__font-awesome"
            }
          />
          Me
        </StyledLink>
        <StyledLink
          className={`about-nav__link ${pathname === "/about/skills" ? "active" : ""}${
            darkMode ? " is-dark-mode" : ""
          }`}
          href={"/about/skills"}
        >
          <FontAwesomeIcon
            icon={faScrewdriverWrench}
            className={
              darkMode
                ? "about-nav__link__font-awesome is-dark-mode"
                : "about-nav__link__font-awesome"
            }
          />
          Skills
        </StyledLink>
        <StyledLink
          className={`about-nav__link ${pathname === "/about/credentials" ? "active" : ""}${
            darkMode ? " is-dark-mode" : ""
          }`}
          href={"/about/credentials"}
        >
          <FontAwesomeIcon
            icon={faCertificate}
            className={
              darkMode
                ? "about-nav__link__font-awesome is-dark-mode"
                : "about-nav__link__font-awesome"
            }
          />
          Credentials
        </StyledLink>
      </nav>
      <Link href={"#"} className="about-cv"><FontAwesomeIcon className="about-cv__fa" icon={faDownload} />Download CV (PDF)</Link>
    </>
  );
}

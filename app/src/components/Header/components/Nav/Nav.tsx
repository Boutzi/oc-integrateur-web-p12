"use client";
import Link from "next/link";
import DarkMode from "./components/DarkMode";
import SendIcon from "@/assets/message-white.svg";
import SendIconDark from "@/assets/message-dark.svg";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

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

export default function Nav() {
  const pathname: string = usePathname();
  const darkMode: boolean = useSelector((state: RootState) => state.local.darkMode);
  return (
    <nav className="main-nav">
      <DarkMode />
      <StyledLink
        className={`main-nav__link ${pathname === "/" ? "active" : ""}${
          darkMode ? " is-dark-mode" : ""
        }`}
        href={"/"}
      >
        Home
      </StyledLink>
      <StyledLink
        className={`main-nav__link ${pathname === "/about/me" || pathname === "/about/skills" || pathname === "/about/credentials" ? "active" : ""}${
          darkMode ? " is-dark-mode" : ""
        }`}
        href={"/about"}
      >
        About me
      </StyledLink>
      <StyledLink
        className={`main-nav__link ${pathname === "/work" ? "active" : ""}${
          darkMode ? " is-dark-mode" : ""
        }`}
        href={"/work"}
      >
        Work
      </StyledLink>
      <StyledLink
        className={`main-nav__link main-nav__link--black ${
          pathname === "/contact" ? "active-contact" : ""
        }${darkMode ? " is-dark-mode" : ""}`}
        href={"/contact"}
      >
        {darkMode && pathname === "/contact" ? (
          <SendIcon alt="sending-icon" className="main-nav__link__send-icon" />
        ) : !darkMode && pathname === "/contact" ? (
          <SendIconDark alt="sending-icon" className="main-nav__link__send-icon" />
        ) : darkMode && pathname !== "/contact" ? (
          <SendIconDark alt="sending-icon" className="main-nav__link__send-icon" />
        ) : (
          <SendIcon alt="sending-icon" className="main-nav__link__send-icon" />
        )}
        Contact
      </StyledLink>
    </nav>
  );
}

"use client"
import { useSelector } from "react-redux";
import Nav from "./components/Nav/Nav";
import MainLogo from "@/assets/logo.svg";
import { RootState } from "@/lib/store";
import Link from "next/link";

export default function Header() {
  const darkMode = useSelector((state: RootState) => state.local.darkMode);
    return (
      <header className="header">
        <Link href={"/"} aria-label="Back to home"><MainLogo alt="Logo" className={`header__logo ${darkMode ? "is-dark-mode" : ""}`}/></Link>
        <Nav />
      </header>
    );
};

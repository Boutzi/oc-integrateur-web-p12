"use client"
import { useSelector } from "react-redux";
import Nav from "./components/Nav/Nav";
import MainLogo from "@/assets/logo.svg";
import MainLogoDark from "@/assets/logo-dark.svg";
import { RootState } from "@/lib/store";
import Link from "next/link";

export default function Header() {
  const darkMode:boolean = useSelector((state: RootState) => state.local.darkMode);
    return (
      <header className="header">
        <Link href={"/"}>{darkMode ? <MainLogoDark alt="Logo" className="header__logo"/> : <MainLogo alt="Logo" className="header__logo"/>}</Link>
        <Nav />
      </header>
    );
};

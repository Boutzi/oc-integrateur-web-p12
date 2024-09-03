import Link from "next/link";
import MainLogo from "@/assets/logo-footer.svg";
import GitHubLogo from "@/assets/github.svg";
import LinkedinLogo from "@/assets/linkedin.svg";

export default function Links() {
  return (
    <div className="footer-links">
      <Link className="footer-links__link" href={"https://github.com/Boutzi"} target="_blank">
        <GitHubLogo alt="Logo" className="footer-links__link-logo" />
      </Link>
      <MainLogo alt="Logo" className="footer-links__logo" />
      <Link
        className="footer-links__link"
        href={"https://www.linkedin.com/in/joseph-girardi/"}
        target="_blank"
      >
        <LinkedinLogo alt="Logo" className="footer-links__link-logo" />
      </Link>
    </div>
  );
}

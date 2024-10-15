import Link from "next/link";
import { Button } from "./ui/button";
import { LucideIcon } from "lucide-react";

export interface CTAProps {
  label: string;
  url: string;
  classes: string;
  target: string;
  icon?: LucideIcon;
}

export const CTA = (props: CTAProps) => {
  return (
    <Link
      href={props.url}
      target={props.target}
      prefetch={false}
      rel="noopener noreferrer"
    >
      <Button className={`rounded-full ${props.classes}`}>
        {props.icon ? <props.icon size={16} /> : ""} {props.label}
      </Button>
    </Link>
  );
};

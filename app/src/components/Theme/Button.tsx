import { RootState } from "@/lib/store";
import Link from "next/link";
import { useSelector } from "react-redux";

interface CustomButtonProps {
    url: string;
    content: string;
    reverse?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ url, content, reverse = false }) => {
    const darkMode = useSelector((state: RootState) => state.local.darkMode)
  return (
    <Link href={url} className={`custom-button ${reverse ? "custom-button--reverse" : ""} ${darkMode ? "is-dark-mode" : ""}`}>
      {content}
    </Link>
  );
};

export default CustomButton;
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

interface CustomTitleProps {
  main: string;
  secondary?: string;
  type?: 1 | 2 | 3 | 4 | 5 | 6;
  tiny?: boolean;
}

const PageTitle: React.FC<CustomTitleProps> = ({ main, secondary, type = 1, tiny = false }) => {
  const darkMode = useSelector((state: RootState) => state.local.darkMode);
  const Tag: keyof JSX.IntrinsicElements = `h${type}` as keyof JSX.IntrinsicElements;
  return (
    <>
      <Tag className={`${darkMode ? "page-title is-dark-mode" : "page-title"} ${tiny ? `page-title--${Tag}--tiny` : ""}`}>
        {main}
        {secondary ? (
          <span className={darkMode ? "page-title--variant is-dark-mode" : "page-title--variant"}>
            {secondary}
          </span>
        ) : (
          ""
        )}
      </Tag>
    </>
  );
};

export default PageTitle;

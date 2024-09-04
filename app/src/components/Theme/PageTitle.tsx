import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

interface CustomTitleProps {
  main: string;
  secondary?: string;
  type?: number;
  tiny?: boolean;
}

const PageTitle: React.FC<CustomTitleProps> = ({ main, secondary, type = 1, tiny = false }) => {
  const darkMode = useSelector((state: RootState) => state.local.darkMode);
  return (
    <>
      {type === 1 ? (
        <h1 className={`${darkMode ? "page-title is-dark-mode" : "page-title"} ${tiny ? "page-title--tiny" : ""}`}>
          {main}
          {secondary ? <span className={darkMode ? "page-title--variant is-dark-mode" : "page-title--variant"}>
            {secondary}
          </span> : ""}
        </h1>
      ) : type === 2 ? (
        <h2 className={`${darkMode ? "page-title--h2 is-dark-mode" : "page-title--h2"} ${tiny ? "page-title--h2--tiny" : ""}`}>
          {main}
          {secondary ? <span className={darkMode ? "page-title--variant is-dark-mode" : "page-title--variant"}>
            {secondary}
          </span> : ""}
        </h2>
      ) : type === 3 ? (
        <h3 className={`${darkMode ? "page-title--h3 is-dark-mode" : "page-title--h3"} ${tiny ? "page-title--h3--tiny" : ""}`}>
          {main}
          {secondary ? <span className={darkMode ? "page-title--variant is-dark-mode" : "page-title--variant"}>
            {secondary}
          </span> : ""}
        </h3>
      ) : type === 4 ? (
        <h4 className={`${darkMode ? "page-title--h4 is-dark-mode" : "page-title--h4"} ${tiny ? "page-title--h4--tiny" : ""}`}>
          {main}
          {secondary ? <span className={darkMode ? "page-title--variant is-dark-mode" : "page-title--variant"}>
            {secondary}
          </span> : ""}
        </h4>
      ) : type === 5 ? (
        <h5 className={`${darkMode ? "page-title--h5 is-dark-mode" : "page-title--h5"} ${tiny ? "page-title--h6--tiny" : ""}`}>
          {main}
          {secondary ? <span className={darkMode ? "page-title--variant is-dark-mode" : "page-title--variant"}>
            {secondary}
          </span> : ""}
        </h5>
      ) : type === 6 ? (
        <h6 className={`${darkMode ? "page-title--h6 is-dark-mode" : "page-title--h6"} ${tiny ? "page-title--h6--tiny" : ""}`}>
          {main}
          {secondary ? <span className={darkMode ? "page-title--variant is-dark-mode" : "page-title--variant"}>
            {secondary}
          </span> : ""}
        </h6>
      ) : (
        <h1 className="page-title">
          {main}
          {secondary ? <span className={`${darkMode ? "page-title--variant is-dark-mode" : "page-title--variant"} ${tiny ? "page-title--tiny" : ""}`}>
            {secondary}
          </span> : ""}
        </h1>
      )}
    </>
  );
};

export default PageTitle;

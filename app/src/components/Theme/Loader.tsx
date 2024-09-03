import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const Loader: React.FC = () => {
    const darkMode = useSelector((state: RootState) => state.local.darkMode)
  return (
    <div className="loader">
      <div className={`spinner ${darkMode ? "is-dark-mode" : ""}`}></div>
    </div>
  );
};

export default Loader;

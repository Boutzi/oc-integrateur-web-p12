import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "@/lib/features/local/localSlice";
import { RootState } from "@/lib/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkMode = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.local.darkMode);

  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isDarkMode = event.target.checked;
    dispatch(changeTheme(isDarkMode));
  };

  return (
    <div className="dark-mode">
      <input
        className="dark-mode__input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={darkMode}
      />
      <label className="dark-mode__label" htmlFor="darkmode-toggle">
        {darkMode ? (
          <FontAwesomeIcon icon={faSun} className="sun" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="moon" />
        )}
      </label>
    </div>
  );
};

export default DarkMode;

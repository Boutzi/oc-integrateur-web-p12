"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { changeTheme } from "@/lib/features/local/localSlice";

const ThemeManager: React.FC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.local.darkMode);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkmode");
    if (storedDarkMode !== null) {
      dispatch(changeTheme(true));
    }
  }, [darkMode, dispatch]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("is-dark-mode");
    } else {
      document.body.classList.remove("is-dark-mode");
    }
  }, [darkMode]);

  return null;
};

export default ThemeManager;

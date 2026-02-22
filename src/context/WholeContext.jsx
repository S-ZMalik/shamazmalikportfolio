"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
export const WholeContext = createContext();
const WholeContextProvider = ({ children }) => {
  const [isVisibleSideBar, setIsVisibleSideBar] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleSideBar = () => {
    setIsVisibleSideBar((prev) => !prev);
  };
  return (
    <WholeContext.Provider
      value={{ isVisibleSideBar, toggleSideBar, isDark, toggleTheme }}
    >
      {" "}
      {children}{" "}
    </WholeContext.Provider>
  );
};
export default WholeContextProvider;
export const useWholeContext = () => {
  return useContext(WholeContext);
};

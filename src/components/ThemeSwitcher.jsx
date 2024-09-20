import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the local storage for the saved theme, defaulting to 'dark' mode
    const currentTheme = localStorage.getItem("bgTheme") || "dark";
    document.body.style.backgroundColor = currentTheme === "dark" ? "black" : "#F5EFE0";
    setIsDarkMode(currentTheme === "dark");
  }, []);

  const handleThemeChange = () => {
    const newTheme = isDarkMode ? "light" : "dark";

    // Change only the background color
    document.body.style.backgroundColor = newTheme === "dark" ? "black" : "#F5EFE0";

    // Save the theme preference in local storage
    localStorage.setItem("bgTheme", newTheme);

    setIsDarkMode(!isDarkMode);
  };

  return (
    <div onClick={handleThemeChange} style={{ cursor: "pointer" }}>
      {isDarkMode ? (
        <FaMoon size={30} color="yellow" />
      ) : (
        <FaSun size={30} color="orange" />
      )}
    </div>
  );
};

export default ThemeSwitcher;

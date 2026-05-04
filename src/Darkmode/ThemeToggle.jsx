import React from "react";
import useThemeStore from "./Themestore";

const ThemeToggle = () => {
  const { dark, toggleTheme } = useThemeStore();

  return (
    <div
      className={`h-screen flex items-center justify-center ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center">
        <h1 className="text-3xl mb-5">
          {dark ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </h1>

        <button
          onClick={toggleTheme}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
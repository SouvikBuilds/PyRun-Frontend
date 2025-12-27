import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext.js";
import { Sun, Moon } from "lucide-react";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={`${
        theme === "dark"
          ? "p-2 rounded bg-[#374151] hover:bg-gray-600 duration-200 active:scale-95 cursor-pointer"
          : "p-2 rounded bg-[#f3f4f6] hover:bg-[#e2e3e4] duration-200 active:scale-95 cursor-pointer"
      }`}
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400" size={15} />
      ) : (
        <Moon className="text-black" size={15} />
      )}
    </button>
  );
};

export default ThemeButton;

import React, { useContext } from "react";
import CompilerPage from "./pages/CompilerPage.jsx";
import ThemeContext from "./context/ThemeContext.js";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-[#111827] min-h-screen overflow-auto"
          : "bg-[#ffffff] min-h-screen overflow-auto"
      }`}
    >
      <CompilerPage />
    </div>
  );
};

export default AppContent;

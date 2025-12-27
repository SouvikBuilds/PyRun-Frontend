import React, { useContext } from "react";
import Navbar from "../components/Navbar.jsx";
import CodeEditor from "../components/CodeEditor.jsx";
import InputHandler from "../components/InputHandler.jsx";
import Output from "../components/Output.jsx";
import ThemeContext from "../context/ThemeContext.js";
const CompilerPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-row items-center p-2">
        <div
          className={`flex-1 flex flex-col gap-0 p-2 border rounded-t-xl ${
            theme === "dark" ? "border-[#374151]" : "border-[#e6e7eb]"
          } w-1/2`}
        >
          <CodeEditor />
          <InputHandler />
        </div>
        <div className="w-1/2 h-screen">
          <Output />
        </div>
      </div>
    </div>
  );
};

export default CompilerPage;

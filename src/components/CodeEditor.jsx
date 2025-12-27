import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext.js";
import CodeContext from "../context/CodeContext.js";

const CodeEditor = () => {
  const { theme } = useContext(ThemeContext);
  const { code, setCode } = useContext(CodeContext);

  return (
    <div className="h-[70vh] p-2">
      <div
        className={`flex w-[98%] ${
          theme === "dark"
            ? "bg-[#f2937] border-[#374151]"
            : "bg-[#f3f4f6] border-[#e6e7eb]"
        } rounded-t-xl border  border-b-0`}
      >
        <div
          className={`flex items-center gap-2 px-4 py-2 ${
            theme === "dark"
              ? "bg-[#1e1e1e] text-gray-200"
              : "bg-[#f3f4f6] text-black"
          } text-sm  rounded-t-xl robotoFont`}
        >
          <span className="text-blue-400">●</span>
          main.py
        </div>
      </div>

      <Editor
        height="93%"
        width={"98%"}
        language="python"
        theme={`${theme === "dark" ? "vs-dark" : "vs-light"}`}
        value={code}
        className={`${
          theme === "dark"
            ? "p-2 border border-[#374151] rounded-b-xl"
            : "p-2 border border-[#e6e7eb] rounded-b-xl"
        }`}
        onChange={(value) => setCode(value)}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;

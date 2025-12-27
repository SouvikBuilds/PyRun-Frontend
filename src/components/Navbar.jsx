import React, { useContext } from "react";
import { CodeXml, Bug, Play, Copy, Download, Trash2 } from "lucide-react";
import ThemeButton from "./ThemeButton.jsx";
import ThemeContext from "../context/ThemeContext.js";
import CodeContext from "../context/CodeContext.js";
import useFindBug from "../hooks/useFindBug.js";
import useRunCode from "../hooks/useRunCode.js";
import { downloadFile, copyToClipboard } from "../utils/index.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { code, output, setCode, setOutput, setError } =
    useContext(CodeContext);

  const { runCode } = useRunCode();
  const { findBug } = useFindBug();

  const buttons = [
    {
      id: 1,
      icon: <Bug className="text-white cursor-pointer" size={20} />,
      text: "Find Bugs",
      onclick: findBug,
    },
    {
      id: 2,
      icon: <Play className="text-white cursor-pointer" size={20} />,
      text: "Run Code",
      onclick: runCode,
    },
  ];

  const actionButtons = [
    {
      id: 1,
      icon: (
        <Copy
          className={
            theme === "dark"
              ? "text-white cursor-pointer"
              : "text-black cursor-pointer"
          }
          size={15}
        />
      ),
      onclick: () => {
        copyToClipboard(code);
        toast.success("Code copied to clipboard", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme === "dark" ? "dark" : "light",
        });
      },
    },
    {
      id: 2,
      icon: (
        <Download
          className={
            theme === "dark"
              ? "text-white cursor-pointer"
              : "text-black cursor-pointer "
          }
          size={15}
        />
      ),
      onclick: () => {
        downloadFile(code, "main.py");
        toast.success("File downloaded successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme === "dark" ? "dark" : "light",
        });
      },
    },
    {
      id: 3,
      icon: <Trash2 className="text-white cursor-pointer" size={15} />,
      onclick: () => {
        setCode("");
        setOutput("");
        setError("");
        toast.success("Code deleted Successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme === "dark" ? "dark" : "light",
        });
      },
    },
  ];

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 lg:py-6 border-b ${
        theme === "dark"
          ? "bg-[#111827] border-[#374151]"
          : "bg-white border-[#e6e7eb]"
      }`}
    >
      <div className="flex items-center gap-2 sm:gap-3 ubuntuFont">
        <CodeXml
          className={theme === "dark" ? "text-blue-400" : "text-blue-600"}
          size={24}
        />
        <h1
          className={`text-xl sm:text-2xl lg:text-3xl font-semibold ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          PyRun
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeButton />

        <div className="hidden sm:flex items-center gap-2 lg:gap-4">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={button.onclick}
              className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded active:scale-95 ${
                button.id === 1
                  ? "bg-yellow-500 active:bg-yellow-600"
                  : "bg-green-600 active:bg-green-700"
              } cursor-pointer`}
            >
              {button.icon}
              <span className="text-white text-xs lg:text-sm">
                {button.text}
              </span>
            </button>
          ))}
        </div>

        <div className="sm:hidden flex items-center gap-1">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={button.onclick}
              className={`p-2 rounded active:scale-95 ${
                button.id === 1
                  ? "bg-yellow-500 active:bg-yellow-600"
                  : "bg-green-600 active:bg-green-700"
              } cursor-pointer`}
            >
              {button.icon}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          {actionButtons.map((button) => (
            <button
              key={button.id}
              onClick={button.onclick}
              className={`p-2 rounded active:scale-95 ${
                button.id === 3
                  ? "bg-red-600 active:bg-red-700"
                  : theme === "dark"
                  ? "bg-[#374151] hover:bg-gray-600"
                  : "bg-[#f3f4f6] hover:bg-[#e2e3e4]"
              } cursor-pointer`}
            >
              {button.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

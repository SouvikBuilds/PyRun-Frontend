import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext.js";
import CodeContext from "../context/CodeContext.js";

const InputHandler = () => {
  const { theme } = useContext(ThemeContext);
  const { input, setInput } = useContext(CodeContext);

  return (
    <div
      className={`w-[97%] h-[20vh] ${
        theme === "dark"
          ? "bg-[#1f2937] border-[#374151]"
          : "bg-[#fff] border-[#e6e7eb]"
      } rounded-xl p-2 flex flex-col gap-2 border m-2`}
    >
      <label
        htmlFor="inputBox"
        className={`${
          theme === "dark" ? "text-[#aaafb8]" : "text-black"
        } text-xl`}
      >
        Input
      </label>

      <textarea
        id="inputBox"
        className={`w-full h-28 p-3 resize-none ${
          theme === "dark"
            ? "text-white bg-[#374151] border-[#374151]"
            : "text-black bg-white border-[#e6e7eb]"
        } border rounded-xl placeholder-gray-400 align-top focus:outline-none`}
        placeholder="Enter input for python programme..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default InputHandler;

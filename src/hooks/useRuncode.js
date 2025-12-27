import { useContext } from "react";
import CodeContext from "../context/CodeContext.js";
import { baseApiUrl } from "../constants/index.js";
import { formatOutput, formatError } from "../utils/index.js";

const useRunCode = () => {
  const { code, input, setError, setOutput, setRunning } =
    useContext(CodeContext);

  const runCode = async () => {
    setRunning(true);
    setOutput("");
    setError("");

    try {
      const response = await fetch(`${baseApiUrl}/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, input }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(formatError(data.message) || "Execution failed");
      } else {
        setOutput(formatOutput(data.data));
      }
    } catch {
      setError("An error occurred while running the code");
    } finally {
      setRunning(false);
    }
  };

  return { runCode };
};

export default useRunCode;

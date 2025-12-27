import { useContext } from "react";
import CodeContext from "../context/CodeContext";
import { baseApiUrl } from "../constants/index.js";

const useFindBug = () => {
  const { code, setError, setOutput, setChecking } = useContext(CodeContext);

  const findBug = async () => {
    setChecking(true);
    setOutput("");
    setError("");

    try {
      const response = await fetch(`${baseApiUrl}/check`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Bug check failed");
      } else {
        setOutput("No syntax errors found. Run code to see output.");
      }
    } catch {
      setError("An error occurred while checking code");
    } finally {
      setChecking(false);
    }
  };

  return { findBug };
};

export default useFindBug;

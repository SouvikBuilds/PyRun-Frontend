import { createContext } from "react";
const CodeContext = createContext({
  code: "",
  setCode: () => {},
  input: "",
  setInput: () => {},
  error: "",
  setError: () => {},
  output: "",
  setOutput: () => {},
  checking: false,
  setChecking: () => {},
  running: false,
  setRunning: () => {},
});

export default CodeContext;

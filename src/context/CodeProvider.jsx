import { useState } from "react";
import React from "react";
import CodeContext from "./CodeContext";
const CodeProvider = ({ children }) => {
  const [code, setCode] = useState(`# Welcome to the Online Python Compiler
print("Hello, World!")

# Try writing some Python code here
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Test the function
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")`);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [output, setOutput] = useState("");
  const [checking, setChecking] = useState(false);
  const [running, setRunning] = useState(false);
  return (
    <CodeContext.Provider
      value={{
        code,
        input,
        error,
        output,
        checking,
        running,
        setCode,
        setInput,
        setError,
        setOutput,
        setChecking,
        setRunning,
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};

export default CodeProvider;

import { Terminal, AlertCircle, CheckCircle } from "lucide-react";
import { formatOutput, formatError } from "../utils";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext.js";
import CodeContext from "../context/CodeContext.js";

const Output = () => {
  const { theme } = useContext(ThemeContext);
  const { output, error, running } = useContext(CodeContext);

  const isDark = theme === "dark";
  const hasOutput = output && output.trim();
  const hasError = error && error.trim();

  return (
    <div
      className={`h-[40vh] sm:h-[60vh] lg:h-[95vh] m-2 mt-2 sm:mt-5 rounded-lg overflow-hidden border ${
        isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      {/* Header */}
      <div
        className={`px-3 sm:px-4 py-2 border-b flex items-center gap-2 ${
          isDark
            ? "bg-gray-800 border-gray-700 text-gray-300"
            : "bg-gray-100 border-gray-200 text-gray-700"
        }`}
      >
        <Terminal className="w-4 h-4" />
        <span className="text-xs sm:text-sm font-mono">Output</span>

        {running && (
          <span className="ml-2 sm:ml-3 text-xs text-green-500 animate-pulse">
            Running…
          </span>
        )}
      </div>

      {/* Body */}
      <div className="h-full p-3 sm:p-4 overflow-auto">
        {running ? (
          <div className="flex items-center justify-center h-full">
            <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Executing code…
            </span>
          </div>
        ) : (
          <>
            {hasOutput && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-xs sm:text-sm font-semibold text-green-500">
                    Output
                  </span>
                </div>

                <pre
                  className={`font-mono text-xs sm:text-sm whitespace-pre-wrap p-2 sm:p-3 rounded border-l-4 ${
                    isDark
                      ? "bg-gray-800 text-gray-100 border-green-400"
                      : "bg-gray-100 text-gray-900 border-green-500"
                  }`}
                >
                  {formatOutput(output)}
                </pre>
              </div>
            )}

            {hasError && (
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span className="text-xs sm:text-sm font-semibold text-red-500">
                    Error
                  </span>
                </div>

                <pre
                  className={`font-mono text-xs sm:text-sm whitespace-pre-wrap p-2 sm:p-3 rounded border-l-4 ${
                    isDark
                      ? "bg-gray-800 text-red-300 border-red-400"
                      : "bg-gray-100 text-red-600 border-red-500"
                  }`}
                >
                  {formatError(error)}
                </pre>
              </div>
            )}

            {!hasOutput && !hasError && (
              <div className="flex items-center justify-center h-full text-center">
                <div className={isDark ? "text-gray-500" : "text-gray-400"}>
                  <Terminal className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2 opacity-50" />
                  <p className="text-sm sm:text-base">Run your code to see the output here</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Output;

import React, { useContext } from "react";
import ThemeProvider from "./context/ThemeProvider.jsx";
import AppContent from "./AppContent.jsx";
import CodeProvider from "./context/CodeProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ThemeProvider>
      <CodeProvider>
        <AppContent />
        <ToastContainer />
      </CodeProvider>
    </ThemeProvider>
  );
};

export default App;

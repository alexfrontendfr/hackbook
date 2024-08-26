import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AnimatePresence mode="wait">
      <App />
    </AnimatePresence>
  </React.StrictMode>,
  document.getElementById("root")
);

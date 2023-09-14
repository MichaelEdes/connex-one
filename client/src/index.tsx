import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
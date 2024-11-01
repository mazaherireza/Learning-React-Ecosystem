import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import Header from "./components/header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header></Header>
  </React.StrictMode>
);

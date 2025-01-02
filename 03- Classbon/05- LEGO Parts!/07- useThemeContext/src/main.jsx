import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "@contexts/app/app-context";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);

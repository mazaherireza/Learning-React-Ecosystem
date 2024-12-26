import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import CartProvider from "./context";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);

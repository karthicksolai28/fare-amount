import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RatesProvider } from "./context/RatesContext";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RatesProvider>
      <App />
    </RatesProvider>
  </StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { currentLocale, t } from "./i18n.js";
import "./styles.css";

document.documentElement.lang = currentLocale;
document.title = t("meta.title");
document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

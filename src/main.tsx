import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Terms from "./Terms";
import Privacy from "./Privacy";

const path = window.location.pathname;

let Component = App;
if (path === "/termos") {
  Component = Terms;
} else if (path === "/privacidade") {
  Component = Privacy;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Component />
  </StrictMode>
);

import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "../components/App/App";

window.onload = () =>
  hydrateRoot(document.getElementById("root") as HTMLElement, <App />);

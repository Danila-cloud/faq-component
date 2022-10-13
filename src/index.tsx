import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FAQ } from "./faq";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="bg-gray-900 h-screen">
      <FAQ />
    </div>
  </React.StrictMode>
);

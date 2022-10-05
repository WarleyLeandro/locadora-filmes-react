import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import Car from "./views/Car";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Car />
  </React.StrictMode>
);

reportWebVitals();

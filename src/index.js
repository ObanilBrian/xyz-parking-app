import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

import Routes from "./components/Routes";
import { FirebaseProvider } from "./provider/FirebaseContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <FirebaseProvider>
    <Routes />
  </FirebaseProvider>
);

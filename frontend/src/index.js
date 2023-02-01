import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import { Navbar, Header, Skills } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Skills />
  </React.StrictMode>
);

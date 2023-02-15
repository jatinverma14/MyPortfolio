import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import { Navbar, Header, About, Skills } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <About />
    <Skills />
  </React.StrictMode>
);

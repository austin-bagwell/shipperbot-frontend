import React from "react";
import ReactDOM from "react-dom/client";
// import { LandingPage } from "./pages/Landing";
import { LoginPage } from "./pages/LoginPage.js";
import { Navbar } from "./components/Navbar.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <LoginPage></LoginPage>
  </React.StrictMode>
);

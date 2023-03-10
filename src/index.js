import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import { LoginPage } from "./pages/LoginPage.js";
import { Navbar } from "./components/Navbar.js";
import "./global.css";

const Heading = styled.h1`
  color: purple;
  text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

const submit = (e) => {
  e.preventDefault();
  console.log(`clicked submit button`);
};

root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Heading>OMG SHIPPERBOT IS HERE</Heading>
    <LoginPage submit={submit}></LoginPage>
  </React.StrictMode>
);

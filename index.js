import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./src/components/Button";
import "antd/dist/antd.css";

function App() {
  return (
    <>
      <h1>Hello React.js</h1>
      <Button> Click me </Button>
    </>
  );
}

const selector = document.querySelector("#app");

ReactDOM.render(<App />, selector);

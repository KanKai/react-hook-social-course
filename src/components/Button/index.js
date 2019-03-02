import React from "react";
import { Button as AntButton } from "antd";
import "./styles.css";

function selectClass(color) {
  switch (color) {
    case "primary":
      return "btn primary";
    case "primaryInline":
      return "btn primary inline";
    case "danger":
      return "btn danger";
    default:
      return "btn";
  }
}

function Button(props) {
  const { children, onClick, color, ...rest } = props;
  return (
    <>
      <AntButton onClick={onClick} {...rest}>
        {children}
      </AntButton>
    </>
  );
}

export default Button;

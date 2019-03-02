import React from "react";
import { Input as AntInput } from "antd";
// import "./styles.css";

// function selectMode(success, error) {
//   if (success) return "input success";
//   else if (error) return "input error";
//   return "input";
// }

function Input(props) {
  const {
    success,
    error,
    value,
    onChange,
    label,
    inline,
    size = "large",
    ...rest
  } = props;
  return (
    <>
      <AntInput value={value} onChange={onChange} size="large" {...rest} />
    </>
    // <div style={{ display: inline ? "inline-block" : "block" }}>
    //   {label && <label className="label">{label}</label>}
    //   <input
    //     className={selectMode(success, error)}
    //     value={value}
    //     onChange={onChange}
    //     {...rest}
    //   />
    // </div>
  );
}

export default Input;

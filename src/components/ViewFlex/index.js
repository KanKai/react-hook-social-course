import React from "react";
import classnames from "classnames";
import "./styles.scss";

function ViewFlex({
  children,
  fluid = false,
  className,
  column,
  margin = true
}) {
  return (
    <div
      className={classnames("view", { fluid, column }, className, { margin })}
    >
      {children}
    </div>
  );
}

export default ViewFlex;

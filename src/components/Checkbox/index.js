import React, { useState } from "react";
import { Icon } from "antd";
import "./styles.scss";

function Checkbox({ onChange = () => {}, checked = false, icon, label = "" }) {
  return (
    <div className="checkboxWrapper" onClick={onChange}>
      <input
        type="checkbox"
        style={{ display: "none" }}
        checked={checked}
        onChange={() => {}}
      />
      <div className="checkbox">
        {checked && (
          <div className="checked">
            <Icon type="check" />
          </div>
        )}
      </div>
      {icon && (
        <div className="iconWrapper">
          <div className="iconContent">{icon}</div>
        </div>
      )}
      <div className="label">{label}</div>
    </div>
  );
}

export default Checkbox;

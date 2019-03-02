import React from "react";
import "./styles.scss";

function CapsuleButton({ icon, label = "", onClick = () => {}, ...rest }) {
  return (
    <>
      <div className="capsuleWrapper" {...rest} onClick={onClick}>
        {icon && <div className="icon">{icon}</div>}
        <div className="label">{label}</div>
      </div>
    </>
  );
}

export default CapsuleButton;

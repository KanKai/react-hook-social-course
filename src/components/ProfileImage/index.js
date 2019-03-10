import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Icon } from "antd";
import { usePreload } from "helpers/util";

function ProfileImage({ src, icon, size = "x3", ...rest }) {
  if (!/(^x[1-9]|10)$/.test(size)) {
    size = "x4";
  }

  const [imageLoaded, setImageLoaded] = useState(null);

  useEffect(() => {
    usePreload(src)
      .then(result => {
        setImageLoaded(result);
      })
      .catch(() => console.log("Cover image can't loaded"));
  }, []);

  return (
    <div className={`image-wrapper ${size}`}>
      {imageLoaded ? (
        <img src={imageLoaded} className="image" />
      ) : (
        <div className="loading">
          <Icon type="minus-circle" />
        </div>
      )}
      {icon && <div className="icon">{icon || <Icon type="plus" />}</div>}
    </div>
  );
}

export default ProfileImage;

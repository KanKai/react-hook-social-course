import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Icon } from "antd";

function ProfileImage({ src, icon, size = "x3", ...rest }) {
  if (!/(^x[1-9])$/.test(size)) {
    size = "x1";
  }

  const [imageLoaded, setImageLoaded] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImageLoaded(src);
    };
    image.onerror = () => {};
  }, []);

  return (
    <div className={`image-wrapper ${size}`}>
      {imageLoaded ? (
        <img src={imageLoaded} className="image" />
      ) : (
        <div className="loading">Loading...</div>
      )}
      {!icon && <div className="icon">{icon || <Icon type="plus" />}</div>}
    </div>
  );
}

export default ProfileImage;
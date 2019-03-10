import React, { useState, useEffect } from "react";
import { usePreload } from "helpers/util";
import "./styles.scss";

function CoverImage({ src }) {
  const [imagePath, setImagePath] = useState(null);
  useEffect(() => {
    usePreload(src)
      .then(result => {
        setImagePath(result);
      })
      .catch(() => console.log("Cover image can't loaded"));
  }, []);
  return (
    <div className="coverImageWrapper">
      {imagePath && <img src={imagePath} />}
    </div>
  );
}

export default CoverImage;

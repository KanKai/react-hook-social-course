import React, { useState, useEffect, useRef } from "react";
import { usePreload } from "helpers/util";
import Dragable from "components/Dragable";
import { Icon } from "antd";
import classnames from "classnames";
import "./styles.scss";

function CoverImage({ src }) {
  const [imagePath, setImagePath] = useState(null);
  const [bluring, setBluring] = useState(true);
  const [moveImageActive, setMoveImageActive] = useState(false);

  const coverRef = useRef();
  const imgRef = useRef();
  useEffect(() => {
    usePreload(src)
      .then(result => {
        setImagePath(result);
      })
      .catch(() => console.log("Cover image can't loaded"));
  }, []);

  function onDrag(e) {
    console.log("coverRef.current -> ", coverRef.current);
    const { clientHeight, clientWidth } = coverRef.current;
    const { clientY } = e;
    const moveY = 100 - (clientY * 100) / clientHeight;
    imgRef.current.style.objectPosition = `center ${moveY}%`;
  }

  function onDragEnd() {
    console.log("drag end");
  }

  function moveImage() {
    setMoveImageActive(true);
  }

  return (
    <Dragable
      active={moveImageActive}
      dragRef={coverRef}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
    >
      <div className="coverImageWrapper">
        <div className="coverAction">
          <div className="actionButton">
            <button>
              <Icon type="picture" />
            </button>
            <button onClick={moveImageActive}>
              <Icon type="drag" />
            </button>
          </div>
        </div>
        {imagePath && (
          <img
            className={classnames({ bluring: !moveImageActive })}
            draggable={false}
            src={imagePath}
            ref={imgRef}
          />
        )}
      </div>
    </Dragable>
  );
}

export default CoverImage;

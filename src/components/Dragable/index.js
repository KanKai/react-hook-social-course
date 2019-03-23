import React, { useState, useRef } from "react";

function Dragable({ children, onDrag, onDragEnd, dragRef, active }) {
  const [isMountDown, setIsMountDown] = useState(false);
  function onMouseDown() {
    if (!active) return;
    setIsMountDown(true);
  }
  function onMouseMove(e) {
    if (!isMountDown) return;
    onDrag(e);
  }
  function onMouseUp(e) {
    setIsMountDown(false);
    onDragEnd(e);
  }
  return (
    <div
      ref={dragRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      {children}
    </div>
  );
}

Dragable.defaultProps = {
  onDrag: () => {},
  onDragEnd: () => {}
};

export default Dragable;

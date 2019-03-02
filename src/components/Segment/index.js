import React from "react";
import "./styles.scss";
import { Icon } from "antd";

function onClose() {}

function renderActions(actions) {
  return (
    <div className="actionsWrapper">
      <div className="container">
        {actions.map((action, i) => (
          <SegmentAction key={btoa(i)}>{action}</SegmentAction>
        ))}
      </div>
    </div>
  );
}

function Segment({ children, content, title, actions = [] }) {
  return (
    <div className="segment">
      <SegmentTitle onClick={onClose}>{title}</SegmentTitle>
      <SegmentContent>{children || content}</SegmentContent>
      {actions.length > 0 && renderActions(actions)}
    </div>
  );
}

Segment.defaultProps = {
  onClose: () => {}
};

function SegmentTitle({ children, title = "", ...rest }) {
  return (
    <div className="title" {...rest}>
      <span className="titleText">{children || title}</span>
      <div onClick={onClose} className="closeButton">
        <Icon type="close" className="icon" />
      </div>
    </div>
  );
}

SegmentTitle.defaultProps = {
  onClose: () => {}
};

function SegmentContent({ children, content = "" }) {
  return (
    <div className="content">
      <div className="container">{children || content}</div>
    </div>
  );
}

function SegmentAction({ children, content = "" }) {
  return <div className="actionItem">{children || content}</div>;
}

export { SegmentTitle, SegmentContent, SegmentAction };
export default Segment;

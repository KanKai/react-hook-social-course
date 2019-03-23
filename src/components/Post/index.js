import React, { useEffect, useState, useRef } from "react";
import Segment from "components/Segment";
import ViewFlex from "components/ViewFlex";
import ProfileImage from "components/ProfileImage";
import "./styles.scss";
import moment from "moment";
import { Icon } from "antd";

const initialData = {
  user: { firstName: "Jeerawat", lastName: "" },
  create_date: moment().format("DD/MM/YY HH:mm"),
  privacy: { name: "" },
  text: "ทดสอบการโพสต์"
};

function PostButton({ icon, label }) {
  return (
    <div className="postButton">
      <ViewFlex margin={false}>
        <div className="icon">
          <Icon type={icon} />
        </div>
        <div className="label">{label}</div>
      </ViewFlex>
    </div>
  );
}

function LikeButton() {
  return <PostButton icon="like" label="ถูกใจ" />;
}

function CommentButton() {
  return <PostButton icon="align-left" label="แสดงความคิดเห็น" />;
}

function PostAction() {
  return (
    <ViewFlex className="postAction">
      <LikeButton />
      <CommentButton />
    </ViewFlex>
  );
}

function Post({ data = initialData }) {
  if (!data) {
    return <h1>No content</h1>;
  }
  const {
    user: { firstName, lastName },
    create_date,
    privacy,
    text
  } = data;

  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [isToolTip, setIsToolTip] = useState(false);

  const textRef = useRef();
  const toolTipRef = useRef();

  function onMouseEnter() {
    // const {
    //   style,
    //   offsetLeft: x,
    //   offsetTop: y,
    //   clientHeight,
    //   clientWidth
    // } = textRef.current;
    // console.log("style", style);
    // console.log("x", x, "y", y);
    // setIsToolTip(true);
    // setY(y);
    // setX(x);
    // toolTipRef.current.style.left = x + "px";
    // toolTipRef.current.style.top = y - 10 + "px";
    // style.color = "red";
  }

  function onMouseOver() {
    const {
      style,
      offsetLeft: x,
      offsetTop: y,
      clientHeight,
      clientWidth
    } = textRef.current;
    console.log("style", style);
    console.log("x", x, "y", y);
    setIsToolTip(true);
    setY(y);
    setX(x);
    toolTipRef.current.style.left = x + "px";
    toolTipRef.current.style.top = y - 10 + "px";
    style.color = "red";
  }

  function onMouseOut() {
    console.log("mouseOut");
  }

  function onMouseLeave() {
    console.log("mouseLeave");
  }

  return (
    <Segment
      // title="โพสต์"
      actions={[<PostAction />]}
    >
      <span
        style={{ position: "absolute", left: "0", top: "0" }}
        hidden={!isToolTip}
        ref={toolTipRef}
      >
        x: {x} y: {y}
      </span>
      <ViewFlex column>
        <div className="postHeader">
          <ViewFlex margin={false}>
            <ViewFlex margin={false}>
              <ViewFlex className="profileImage">
                <ProfileImage size="x2" />
              </ViewFlex>
              <ViewFlex column className="right">
                <ViewFlex
                  className="username"
                  margin={false}
                >{`${firstName} ${lastName}`}</ViewFlex>
                <ViewFlex>
                  <div className="privacy">
                    {privacy && <ViewFlex>{privacy.name}</ViewFlex>}
                  </div>
                  <div className="createAt">{create_date && create_date}</div>
                </ViewFlex>
              </ViewFlex>
            </ViewFlex>
            <ViewFlex>right</ViewFlex>
          </ViewFlex>
        </div>
        <div className="content">
          <div className="postText">
            <h2
              ref={textRef}
              // onMouseEnter={onMouseEnter}
              // onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
              onMouseOut={onMouseOut}
            >
              {text}
            </h2>
          </div>
        </div>
      </ViewFlex>
    </Segment>
  );
}

export default Post;

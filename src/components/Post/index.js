import React, { useEffect, useState } from "react";
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
  return (
    <Segment
      // title="โพสต์"
      actions={[<PostAction />]}
    >
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
            <h2>{text}</h2>
          </div>
        </div>
      </ViewFlex>
    </Segment>
  );
}

export default Post;

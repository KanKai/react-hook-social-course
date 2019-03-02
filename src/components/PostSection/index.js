import React from "react";
import Segment from "components/Segment";
import ViewFlex from "components/ViewFlex";
import ProfileImage from "components/ProfileImage";
import "./styles.scss";
import CapsuleButton from "components/CapsuleButton";
import { Icon, Row, Col, Dropdown, Menu } from "antd";
import Checkbox from "components/Checkbox";
import Button from "components/Button";

const src =
  "https://i0.wp.com/www.wwhf.org/wp-content/uploads/2014/04/bokeh-cover-bg.jpg?ssl=1";

function handlePrivacyClick(e) {
  console.log("click", e);
}

const privacy = (
  <Menu onClick={handlePrivacyClick}>
    <Menu.Item key="public">
      <Icon type="global" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="onlyMe">
      <Icon type="lock" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="friend">
      <Icon type="team" />
      3rd item
    </Menu.Item>
  </Menu>
);

function PrivacySelector({ type = privacy }) {
  return (
    <Dropdown overlay={type} trigger={["click"]}>
      <Button style={{ float: "right" }}>
        <Icon type="global" /> Button <Icon type="down" />
      </Button>
    </Dropdown>
  );
}

const postOptions = [
  {
    icon: <Icon type="plus" />,
    label: "รูปภาพ/วิดิโอ"
  },
  {
    icon: <Icon type="user" />,
    label: "tag friend"
  },
  {
    icon: <Icon type="minus" />,
    label: "remove tag friend"
  }
];

function renderPostOption(option) {
  return option.map((opt, i) => (
    <ViewFlex key={btoa(i)} margin={false}>
      <CapsuleButton {...opt} />
    </ViewFlex>
  ));
}

function FeedAction() {
  return (
    <>
      <Row>
        <Col span="12">
          <Checkbox label="ฟีดข่าว" icon={<Icon type="read" />} />
        </Col>
        <Col span="12">
          <PrivacySelector />
        </Col>
      </Row>
    </>
  );
}

function StoriesAction() {
  return (
    <>
      <Row>
        <Col span="12">
          <Checkbox
            label="เรื่องราวของฉัน"
            icon={
              <ProfileImage size="x2" src={src} icon={<Icon type="plus" />} />
            }
          />
        </Col>
        <Col span="12">
          <PrivacySelector />
        </Col>
      </Row>
    </>
  );
}

function ShareAction() {
  return (
    <>
      <ViewFlex>
        <ViewFlex className="gapRight">
          <Dropdown trigger={["click"]}>
            <Button>
              <Icon type="down" /> See More
            </Button>
          </Dropdown>
        </ViewFlex>
        <ViewFlex fluid>
          <Button type="primary" block>
            แชร์
          </Button>
        </ViewFlex>
      </ViewFlex>
    </>
  );
}

function PostSection() {
  return (
    <Segment
      title="โพสต์"
      actions={[<FeedAction />, <StoriesAction />, <ShareAction />]}
    >
      <ViewFlex column>
        <ViewFlex className="postSection">
          <ViewFlex>
            <ProfileImage size="x3" src={src} />
          </ViewFlex>
          <ViewFlex fluid>
            <textarea
              className="postInputArea"
              placeholder="คุณกำลังคิดอะไรอยู่..."
            />
          </ViewFlex>
        </ViewFlex>
        <ViewFlex margin={false}>{renderPostOption(postOptions)}</ViewFlex>
      </ViewFlex>
    </Segment>
  );
}

export default PostSection;

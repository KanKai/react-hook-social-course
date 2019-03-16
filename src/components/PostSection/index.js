import React, { useEffect, useState } from "react";
import Segment from "components/Segment";
import ViewFlex from "components/ViewFlex";
import ProfileImage from "components/ProfileImage";
import "./styles.scss";
import CapsuleButton from "components/CapsuleButton";
import { Icon, Row, Col, Dropdown, Menu } from "antd";
import Checkbox from "components/Checkbox";
import Button from "components/Button";
import { connect } from "react-redux";
import MenuItem from "antd/lib/menu/MenuItem";

const src =
  "https://i0.wp.com/www.wwhf.org/wp-content/uploads/2014/04/bokeh-cover-bg.jpg?ssl=1";

function handlePrivacyClick(e) {
  console.log("click", e);
}

function PrivacySelector({ privacyMenu }) {
  return (
    <Dropdown overlay={privacyMenu} trigger={["click"]}>
      <Button style={{ float: "right" }}>
        <Icon type="global" /> Privacy <Icon type="down" />
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

const createPrivacyMenu = privacies => {
  return (
    <Menu onClick={() => {}}>
      {privacies.map(privacy => (
        <MenuItem key={privacy.name}>
          <Icon type={privacy.icon} />
          {privacy.name}
        </MenuItem>
      ))}
    </Menu>
  );
};

function FeedAction({ privacies }) {
  const [privacyMenu, setPrivacyMenu] = useState(null);

  useEffect(() => {
    if (privacies.length > 0) {
      const privaciesComponent = createPrivacyMenu(privacies);
      setPrivacyMenu(privaciesComponent);
    }
  }, [privacies]);

  return (
    <>
      <Row>
        <Col span={12}>
          <Checkbox label="ฟีดข่าว" icon={<Icon type="read" />} />
        </Col>
        <Col span={12}>
          <PrivacySelector privacyMenu={privacyMenu} />
        </Col>
      </Row>
    </>
  );
}

function StoriesAction({ privacies }) {
  const [privacyMenu, setPrivacyMenu] = useState(null);

  useEffect(() => {
    if (privacies.length > 0) {
      const privaciesComponent = createPrivacyMenu(privacies);
      setPrivacyMenu(privaciesComponent);
    }
  }, [privacies]);

  return (
    <>
      <Row>
        <Col span={12}>
          <Checkbox
            label="เรื่องราวของฉัน"
            icon={
              <ProfileImage size="x2" src={src} icon={<Icon type="plus" />} />
            }
          />
        </Col>
        <Col span={12}>
          <PrivacySelector privacyMenu={privacyMenu} />
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

function PostSection({ post }) {
  return (
    <Segment
      title="โพสต์"
      actions={[
        <FeedAction privacies={post.privacies} />,
        <StoriesAction privacies={post.privacies} />,
        <ShareAction />
      ]}
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

const mapStateToProps = ({ post }) => ({ post });

export default connect(mapStateToProps)(PostSection);

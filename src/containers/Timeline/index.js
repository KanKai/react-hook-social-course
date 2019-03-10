import React from "react";
import TimelineHeader from "components/Timeline/Header";
import PostSection from "components/PostSection";
import { Row, Col } from "antd";

function TimelineContainer() {
  const data = {
    profileImagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQreltACcIU7er8QwYCnFihO0dSxlQKp1D_I2G-NQWUXEtVdDn5DA",
    coverImagePath:
      "http://www.channeleightnews.com/wp-content/uploads/2017/05/hacker-Gu-577f9e9d3df78c1e1fb0b9c4.jpg",
    name: "Jeerawat Keawsawat"
  };
  return (
    <>
      <TimelineHeader data={data} />
      <Row gutter={10}>
        <Col span={8}>col8</Col>
        <Col span={16}>
          <div>
            <PostSection />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default TimelineContainer;

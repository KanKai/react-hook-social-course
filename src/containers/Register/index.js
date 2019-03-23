import React from "react";
import { Link } from "react-router-dom";
import SignUp from "components/SignUp";
import "./styles.scss";
import { Row, Col, Icon } from "antd";

function LoginContainer() {
  return (
    <div className="registerContainer">
      <div className="backButton">
        <Link to="/sign-in">
          <Icon type="left" />
          <span>Back</span>
        </Link>
      </div>
      <SignUp />
      {/* <div className="wrapper">
        <Row>
          <Col>Back</Col>
        </Row>
        <Row>
          <Col>
            <SignUp />
          </Col>
        </Row>
      </div> */}
    </div>
  );
}

export default LoginContainer;

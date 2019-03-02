import React, { useEffect, useState } from "react";
import Button from "components/Button";
import Input from "components/Input";
import { API } from "../../configs";
import "./styles.scss";
import { Row, Col, Icon } from "antd";
import { UserModel } from "models";

const onSignIn = user => async e => {
  e.preventDefault();
  try {
    const result = await API.fetchAPI(
      `/users?username=${user.email}&password=${user.password}`
    );
    if (result.length > 0) {
      alert(`Hello ${result[0].username}`);
    } else {
      alert(`User not found!`);
    }
  } catch (err) {
    if (err.hasOwnProperty("response")) {
      alert(err.response.error.message);
    }
  }
};

const renderForm = inputFields => {
  return inputFields.map((props, i) => (
    <Row key={btoa(i)}>
      <Col className="col">
        <Input {...props} />
      </Col>
    </Row>
  ));
};

function SignIn() {
  const initialUserFormModel = new UserModel();
  const [user, setUser] = useState(initialUserFormModel);

  const onChanges = setter => event => {
    const { name, value } = event.target;
    setter({ ...user, [name]: value });
  };

  const inputFields = [
    {
      value: user.email,
      name: "email",
      placeholder: "E-mail",
      prefix: <Icon type="mail" />,
      onChange: onChanges(setUser)
    },
    {
      value: user.password,
      name: "password",
      placeholder: "Password",
      type: "password",
      prefix: <Icon type="lock" />,
      onChange: onChanges(setUser)
    }
  ];

  return (
    <>
      <div className="signInContainer">
        <h2>SignIn</h2>
        <hr />
        <form onSubmit={onSignIn(user)} style={{ width: "100%" }}>
          {renderForm(inputFields)}
          <Row>
            <Col span={12} className="col">
              <Button block type="primary" htmlType="submit">
                SignIn
              </Button>
            </Col>
            <Col span={12} className="col">
              <Button block>SignUp</Button>
            </Col>
          </Row>
        </form>
      </div>
    </>
  );
}

export default SignIn;

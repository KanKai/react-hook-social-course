import React, { useState } from "react";
import Button from "components/Button";
import Input from "components/Input";
import { API } from "configs";
import "./styles.scss";
import { Row, Col, Icon } from "antd";
import { UserModel } from "models";

const onSignUp = (user, setter) => e => {
  console.log("user -> ", user);
  e.preventDefault();
  setter({ user: new UserModel() });
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

function SignUp() {
  const initialFormSignUp = new UserModel();
  const [user, setUser] = useState(initialFormSignUp);

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
      value: user.firstName,
      name: "firstName",
      placeholder: "First Name",
      prefix: <Icon type="user" />,
      onChange: onChanges(setUser)
    },
    {
      value: user.lastName,
      name: "lastName",
      placeholder: "Last Name",
      prefix: <Icon type="user" />,
      onChange: onChanges(setUser)
    },
    {
      value: user.password,
      name: "password",
      placeholder: "Password",
      type: "password",
      prefix: <Icon type="lock" />,
      onChange: onChanges(setUser)
    },
    {
      value: user.confirmPassword,
      name: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
      prefix: <Icon type="lock" />,
      onChange: onChanges(setUser)
    }
  ];

  return (
    <>
      <div className="signInContainer">
        <h2>SignUp</h2>
        <hr />
        <form onSubmit={onSignUp(user, setUser)} style={{ width: "100%" }}>
          {renderForm(inputFields)}
          <Row>
            <Col>
              <Button block type="primary" htmlType="submit">
                SignUp
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    </>
  );
}

export default SignUp;

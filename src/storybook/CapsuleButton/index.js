import React from "react";
import { storiesOf } from "@storybook/react";
import CapsuleButton from "../../components/CapsuleButton";
import { Icon } from "antd";

storiesOf("Capsule Button", module)
  .add("withLabel", () => (
    <>
      <CapsuleButton label="Hello Button" />
    </>
  ))
  .add("withIcon", () => (
    <>
      <CapsuleButton label="Hello Button" icon={<Icon type="user" />} />
    </>
  ));

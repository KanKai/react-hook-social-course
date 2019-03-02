import React from "react";
import Input from "../../components/Input";
import { storiesOf } from "@storybook/react";

storiesOf("Input", module)
  .add("default", () => <Input />)
  .add("withError", () => <Input error />)
  .add("withSuccess", () => <Input success />)
  .add("withLabel", () => <Input label="Test" />)
  .add("withInline", () => (
    <>
      <Input inline label="Username" />
      <Input inline label="Password" />
    </>
  ))
  .add("withOutInline", () => (
    <>
      <Input label="Username" />
      <Input label="Password" />
    </>
  ));

import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "components/Checkbox";
import { Icon } from "antd";
import ProfileImage from "components/ProfileImage";

const src =
  "https://i0.wp.com/www.wwhf.org/wp-content/uploads/2014/04/bokeh-cover-bg.jpg?ssl=1";

function CheckboxPlayGround() {
  const [checked, setChecked] = useState(false);
  const onChange = function() {
    setChecked(!checked);
  };
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      icon={<Icon type="user" />}
      label="Hello Icon"
    />
  );
}

storiesOf("Checkbox", module)
  .add("withLabel", () => (
    <>
      <Checkbox label="withLabel" />
    </>
  ))
  .add("with prefix icon", () => (
    <>
      <Checkbox icon={<Icon type="user" />} label="withIcon" checked={true} />
    </>
  ))
  .add("with prefix profile image", () => (
    <>
      <Checkbox
        icon={<ProfileImage size="x2" src={src} />}
        label="Jeerawat Keawsawat"
      />
    </>
  ))
  .add("play ground", () => (
    <>
      <CheckboxPlayGround />
    </>
  ));

import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileImage from "components/ProfileImage";
const src =
  "https://i0.wp.com/www.wwhf.org/wp-content/uploads/2014/04/bokeh-cover-bg.jpg?ssl=1";
storiesOf("Profile Image", module)
  .add("with no image", () => <ProfileImage />)
  .add("with image", () => <ProfileImage src={src} />);

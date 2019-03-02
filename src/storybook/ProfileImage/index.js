import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileImage from "components/ProfileImage";

storiesOf("ProfileImage", module)
  .add("with no image", () => <ProfileImage />)
  .add("with image", () => (
    <ProfileImage src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" />
  ));

import React from "react";
import { storiesOf } from "@storybook/react";

import CoverImage from "components/Timeline/Cover";

storiesOf("Cover Image", module)
  .add("cover image", () => (
    <CoverImage src="http://www.channeleightnews.com/wp-content/uploads/2017/05/hacker-Gu-577f9e9d3df78c1e1fb0b9c4.jpg" />
  ))
  .add("non cover image", () => <CoverImage />);

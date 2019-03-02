import React from "react";
import { storiesOf } from "@storybook/react";
import Segment from "components/Segment";

storiesOf("Segment", module)
  .add("withTitle", () => <Segment title="My Segment" />)
  .add("withContent", () => <Segment title="Post" content={<div>test</div>} />);

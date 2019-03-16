import React from "react";
import { storiesOf } from "@storybook/react";
import PostSection from "components/PostSection";
import stores from "stores";
import { Provider } from "react-redux";

storiesOf("Post Section", module).add("Normally", () => (
  <Provider store={stores}>
    <PostSection />
  </Provider>
));

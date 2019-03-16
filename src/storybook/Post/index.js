import React from "react";
import { storiesOf } from "@storybook/react";
import Post from "components/Post";
import stores from "stores";
import { Provider } from "react-redux";

storiesOf("Social Post", module).add("default", () => (
  <Provider store={stores}>{<Post />}</Provider>
));

import React from "react";
import { Layout as AntdLayout } from "antd";
import "./styles.scss";

function Layout({ children }) {
  return (
    <AntdLayout className="layoutWrapper">
      <AntdLayout.Content className="content">{children}</AntdLayout.Content>
    </AntdLayout>
  );
}

export default Layout;

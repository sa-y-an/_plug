import "../css/customlayout.css";
import React from "react";
import { Layout, Menu, Pagination } from "antd";
import Post from "./Post";
import Header2 from "./Header";



const { Content } = Layout;

function CustomLayout() {
  return (
    <div>
      <Layout className="layout">
        <Header2/>
        <Content style={{ padding: "0 50px", height: "100vh" }} align="middle">
          <h2>Welcome to the feed !</h2>
          <Post />
          <br />
          <Pagination defaultCurrent={1} total={50} />
        </Content>
      </Layout>
      ,
    </div>
  );
}

export default CustomLayout;

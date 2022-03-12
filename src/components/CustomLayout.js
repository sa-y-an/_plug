import "../css/customlayout.css";
import React from "react";
import { Layout, Menu, Pagination } from "antd";
import Post from "./Post";
import {firebase} from "../Firebase/firebase"

const { Header, Content } = Layout;

function CustomLayout() {

  const signOut = () => {
    firebase.auth().signOut();
  }

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ justifyContent: "flex-end" }}
          >
            <Menu.Item>Favourites</Menu.Item>
            <Menu.Item>Account</Menu.Item>
            <Menu.Item onClick={signOut}>Logout</Menu.Item>
          </Menu>
        </Header>
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

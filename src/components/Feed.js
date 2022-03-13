import React from 'react'
import { Layout, Pagination } from "antd";
import Post from "./Post";
const { Content } = Layout;

function Feed() {
  return (
    <div>
      <Layout align="middle">
        <Content>
        <h2>Welcome to the feed !</h2>
            <Post />
            <br />
            <Pagination defaultCurrent={1} total={50} />
        </Content>
      </Layout>
    </div>
  )
}

export default Feed
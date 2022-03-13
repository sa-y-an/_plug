import React from 'react'
import { Layout, Pagination } from "antd";
import Post from "./Post";
const { Content } = Layout;

function Feed({statuses, user}) {
  return (

    <div>
      <Layout align="middle">
        <Content>
        <h2>Welcome to the feed, {user.displayName} !</h2>
            < Post statuses={statuses} user={user} />
            <br />
            <Pagination defaultCurrent={1} total={50} />
        </Content>
      </Layout>
    </div>
  )
}

export default Feed
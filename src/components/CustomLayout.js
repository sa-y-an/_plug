import '../css/customlayout.css';
import React from 'react'
import { Layout, Menu,  Pagination } from 'antd';
import Post from './Post';
const { Header, Content,} = Layout;

function CustomLayout() {
  return (
    <div>
    <Layout className="layout" >
        <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{justifyContent:'flex-end'}}>
            {new Array(2).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
            

        </Menu>
        
        </Header>
        <Content style={{ padding: '0 50px' , height: '100vh'}}
        align="middle" >
            <h2>
              Welcome to the feed !
            </h2>
            <Post/>
            <br />
            <Pagination defaultCurrent={1} total={50} />
        </Content>
        
    </Layout>,
    </div>
  )
}

export default CustomLayout
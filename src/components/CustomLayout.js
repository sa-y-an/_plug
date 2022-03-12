import '../css/customlayout.css';
import React from 'react'
import { Layout, Menu } from 'antd';
import Post from './Post';
const { Header, Content, Footer } = Layout;

function CustomLayout() {
  return (
    <div>
    <Layout className="layout">
        <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(2).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
        </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Post/>
        </Content>
        
    </Layout>,
    </div>
  )
}

export default CustomLayout
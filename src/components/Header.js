import React from 'react'
import '../css/header.css'
import { HomeOutlined } from '@ant-design/icons'
import { Layout, Menu } from "antd";
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'



const { Header, Content } = Layout;


function Header2() {
  const { logout } = useLogout()
  const { user } = useAuthContext()


  return (
    <div>
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
            <Menu.Item onClick={logout}>Logout</Menu.Item>
          </Menu>
        </Header>

    </div>
  )
}

export default Header2
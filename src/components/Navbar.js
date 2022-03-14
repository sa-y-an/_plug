import React from 'react'
import '../css/header.css'
import { Layout, Menu } from "antd";
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'

const { Header} = Layout;


function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <div>
        <Header>
          <a href="/">
            <div className="logo" />
          </a>

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ justifyContent: "flex-end" }}
          >
            { user && 
            <>
              <Menu.Item >
                <a href="/favourites">
                Favourites
                </a>
              </Menu.Item>
              <Menu.Item >
                <a href="/profile"> Account</a>
              </Menu.Item>
              <Menu.Item onClick={logout}>Logout</Menu.Item>
            </>
            } 
          </Menu>
        </Header>

    </div>
  )
}

export default Navbar
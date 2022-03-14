import React from 'react'
import { Layout, Menu } from "antd";
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'
// import '../css/header.css'
const { Header} = Layout;


function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <div>
        <Header style={{ backgroundColor : "rgba(222, 222, 222, 1)"}}>
          
          <Menu
            theme="light"
            mode="horizontal"
            style={{ justifyContent: "flex-end" ,backgroundColor : "rgba(222, 222, 222, 1)" }}
          >
            <Menu.Item key={0} >
              <a href="/">
                Home
              </a>
            </Menu.Item>
            { user && 
            <>
              <Menu.Item key={1}>
                <a href="/favourites">
                Favourites
                </a>
              </Menu.Item>
              <Menu.Item key={2}>
                <a href="/profile"> Account</a>
              </Menu.Item > 
              <Menu.Item onClick={logout} key={3}>Logout</Menu.Item>
            </>
            } 
          </Menu>
        </Header>

    </div>
  )
}

export default Navbar
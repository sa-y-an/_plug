import React from 'react'
import '../css/header.css'
import { HomeOutlined } from '@ant-design/icons'


function Header() {
  return (
    <div>
        <header>
            <HomeOutlined />
            <h2>
                This is header
            </h2>
        </header>

    </div>
  )
}

export default Header
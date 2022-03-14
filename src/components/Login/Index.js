import React from 'react'
import { Layout, Pagination } from "antd";
import Signin from './Signin';
import Annonymous from './Annonymous';

const { Header, Content } = Layout;

function Index() {
  return (
    <div>
        <Content align="middle" style={{ minHeight : "100vh" }} className="index">
            <h3>
                Please login using any of the following methods - 
            </h3>
            <Signin/>
            <br />
            <Annonymous/>
        </Content>
    </div>
  )
}

export default Index
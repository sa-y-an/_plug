import React from 'react'
import { firebase } from '../Firebase/firebase'
import { Button, Space, Layout, Menu } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;


function Signin() {
    
    const SignInWithFireBase = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then( (re) => {
            console.log(re);
        })
        .catch( (err) => {
            console.log(err);
        })
    }
  
    return (
    <div>
        <Layout className='layout'> 
            <Header style={{ justifyContent: "flex-end" }}>
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ justifyContent: "center" }}
                >
                Welcome to Plug
                </Menu>
            </Header>
            <Content type="flex" style={{height:"90vh", alignItems:"center", justifyContent:"center"}} align="middle">
                <p>
                    Please sign in with google to proceed !
                </p>
            <Button
                type="primary"
                icon={<PoweroffOutlined />}
                onClick={SignInWithFireBase}
            >
                Sign In With Google
            </Button>

            </Content>
        </Layout>        
    </div>
  )
}

export default Signin
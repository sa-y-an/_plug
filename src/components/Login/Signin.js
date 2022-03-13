import React from 'react'
import { firebase } from '../../Firebase/firebase'
import { Button, Space, Layout, Menu } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useAuthContext } from '../../hooks/useAuthContext'

const { Header, Content } = Layout;

function Signin() {
    
    const { dispatch } = useAuthContext()

    const SignInWithFireBase = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then( (res) => {
            dispatch( { type: 'LOGIN' , payload : res.user })
        })
        .catch( (err) => {
            console.log(err);
        })
    }
  
    return (
    <div>

        <Content type="flex" style={{alignItems:"center", justifyContent:"center"}} align="middle">

        <Button
            type="primary"
            icon={<PoweroffOutlined />}
            onClick={SignInWithFireBase}
        >
            Sign In With Google
        </Button>

        </Content>
     
    </div>
  )
}

export default Signin
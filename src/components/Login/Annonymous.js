import React from 'react'
import { Content } from 'antd/lib/layout/layout'
import { Button } from 'antd'
import { UnlockOutlined } from '@ant-design/icons'
import { getAuth, signInAnonymously } from "firebase/auth";
import { useAuthContext } from '../../hooks/useAuthContext';

function Annonymous() {

    const { dispatch } = useAuthContext()

    const loginUser = () => {
        const auth = getAuth();
        signInAnonymously(auth)
        .then((res) => {
            // Signed in..
            dispatch( { type: 'LOGIN' , payload : res.user })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });    
    }


    return (
    <div>
        <Content>
            <Button
            icon={<UnlockOutlined />}
            type="primary"
            onClick={loginUser}
            >
                Annonymous Login
            </Button>
        </Content>
    </div>
    )
}

export default Annonymous
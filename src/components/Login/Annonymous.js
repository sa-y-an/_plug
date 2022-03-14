import React, { useState, useEffect } from 'react'
import { Content } from 'antd/lib/layout/layout'
import { Button } from 'antd'
import { UnlockOutlined } from '@ant-design/icons'
import { getAuth, signInAnonymously , updateProfile} from "firebase/auth";
import { useAuthContext } from '../../hooks/useAuthContext';
import FetchRandomData from './FetchRandomData';

function Annonymous() {

    const { dispatch } = useAuthContext()
    let name = "Johny";
    let picUrl = "https://randomuser.me/api/portraits/thumb/women/42.jpg"

    useEffect( () => {
        fetch(`https://randomuser.me/api/`)
        .then( (res) => {
            return res.json();
        } )
        .then( (data) => {
            name = data.results[0].name.first;
            picUrl = data.results[0].picture.thumbnail;
        })
    }, [])

    const loginUser = () => {
        const auth = getAuth();
        signInAnonymously(auth)
        .then((res) => {
            // Signed in..
            updateProfile(auth.currentUser, {
                displayName: name, 
                photoURL: picUrl
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
              
            dispatch( { type: 'LOGIN' , payload : res.user })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });    
    }


    return (
    <div>
        <Content>
            <FetchRandomData/>
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
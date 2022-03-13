import React from 'react'
import Navbar from '../components/Navbar'
import Layout from 'antd/lib/layout/layout'
import Signin from '../components/Signin'


function SignIn() {
  return (
    <div>
        <Layout className='layout'>
            <Navbar/>
            <Signin/>
        </Layout>
    </div>
  )
}

export default SignIn
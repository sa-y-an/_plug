import React from 'react'
import Navbar from '../components/Navbar'
import Layout from 'antd/lib/layout/layout'
import Index from '../components/Login/Index'

function SignIn() {
  return (
    <div>
        <Layout className='layout'>
            <Navbar/>
            <Index/>
        </Layout>
    </div>
  )
}

export default SignIn
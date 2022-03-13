import React from 'react'
import Layout from 'antd/lib/layout/layout'
import Navbar from '../components/Navbar'
import Account from '../components/Account'

function Profile() {
  return (
    <div>
        <Layout className='layout'>
          <Navbar/>
          <Account/>
        </Layout>
    </div>
  )
}

export default Profile
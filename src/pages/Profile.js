import React from 'react'
import Layout from 'antd/lib/layout/layout'
import Navbar from '../components/Navbar'
import Account from '../components/Account'
import { useAuthContext } from '../hooks/useAuthContext'


function Profile() {

  const { user } = useAuthContext()

  return (
    <div>
        <Layout className='layout'>
          <Navbar/>
          <Account user={user}/>
        </Layout>
    </div>
  )
}

export default Profile
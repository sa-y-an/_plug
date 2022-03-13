import React from 'react'
import Layout from 'antd/lib/layout/layout'
import Navbar from '../components/Navbar'
import Account from '../components/Account'
import { useAuthContext } from '../hooks/useAuthContext'
// import { useCollection } from '../hooks/useCollection'


function Profile() {

  const { user } = useAuthContext()

  return (
    <div>
        <Layout className='layout'>
          <Navbar/>
          <Account uid={user.uid}/>
        </Layout>
    </div>
  )
}

export default Profile
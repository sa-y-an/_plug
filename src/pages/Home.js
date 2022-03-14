import React from 'react'
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection'

function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'statuses');
  return (
    <div>
      <Navbar/>
      { error && <p> {error} </p> }
      { documents && <Feed statuses={documents} user={user} />}
    </div>
  )
}

export default Home
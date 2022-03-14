import React, { useEffect, useState} from 'react'
import Layout from 'antd/lib/layout/layout'
import Navbar from '../components/Navbar'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection'
import Post from '../components/Post';


function Loved() {
	const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'statuses', ["loves", "array-contains", user.uid ], null);

	const [isFirstTime, setisFirstTime] = useState(true);

	useEffect( () => {
		if(documents && Object.keys(documents).length !== 0 && Object.getPrototypeOf(documents) !== Object.prototype){
			setisFirstTime(false)
			console.log("hello")
		}
		console.log("isFirstTime ran")
		console.log(documents)
	}, [documents])	

  return (
		<div>
			<Layout>
				<Navbar/>
				{ !isFirstTime && 
				<div>
					<h2 align="center">
						Your Favourite Profiles !
					</h2>
				<Post statuses={documents} user={user} />
				</div>
				}
				{ isFirstTime && 
					<p style={{ minHeight : "95vh" }} align="middle">
						Favourite a profile to see here ..........
					</p>
				}
			</Layout>
		</div>
  )
}

export default Loved
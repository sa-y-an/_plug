import "../css/account.css"
import React from 'react'
import {Layout} from 'antd'
import { Form, Input, Button} from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useState, useEffect } from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useCollection } from '../hooks/useCollection'
import { projectFirestore } from "../Firebase/firebase";


function Account( {user}) {
  
  const [name, setName] = useState(null);
  
  const { addDocument, response } = useFirestore('statuses')
  const { documents, error } = useCollection(
    'statuses', ["uid", "==", user.uid]);

  const [isFirstTime, setisFirstTime] = useState(true);

  useEffect( () => {
    if(documents && Object.keys(documents).length !== 0 && Object.getPrototypeOf(documents) !== Object.prototype){
      setisFirstTime(false)
      console.log("hello")
    }
    console.log("isFirstTime ran")
  }, [documents])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
      uid : user.uid, 
      name, 
      likes : [],
      loves : [],
      loveCount : 0,
      likeCount : 0,
      dislikes : [],
      dislikeCount : 0,
      pname : user.displayName,
      picUrl : user.photoURL,

    })
  }

  const handleUpdate = (e) => {
    console.log(documents[0].id)
    const db = projectFirestore.collection("statuses")
    db.doc(documents[0].id).update ( {
      name : name
    })

  }

  // reset the form fields
  const [form] = Form.useForm();

  useEffect(() => {
    if (response.success) {
      form.resetFields();
    }
  }, [response.success])


  return (
    <div>
      <Layout align="middle">
        <h3>
          Profile Page
        </h3>
        
        <Content>
          { !isFirstTime && 
            <div>
            <p>
              Current Status : {documents[0].name};
            </p>
            <p>
              Likes : {documents[0].likeCount}
            </p>
            <p>
              Bookmarked : {documents[0].likeCount}
            </p>
            </div>
          }

          { isFirstTime && 
            <p>
              Please Set your status below .....
            </p>
          }
          <Form align="middle" form={form} name="control-hooks" >
            <Form.Item
              name = "Status "
            >
              <Input style={{ maxWidth : "60vw"}}
                onChange={(e) => setName(e.target.value)} 
                value={name} 
                rules={[
                  {
                    required: true,
                  },
                ]}
              />
            </Form.Item>
            { isFirstTime && <Button type='primary' htmlType="submit" onClick={handleSubmit}> 
                Submit
            </Button>}
            { !isFirstTime && 
              <Button type="secondary" onClick={handleUpdate}>
                Update Status
              </Button>
            }
          </Form>
        </Content>
      </Layout>
    </div>
  )
}

export default Account
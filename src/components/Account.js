import "../css/account.css"
import React from 'react'
import {Layout} from 'antd'
import { Form, Input, Button, Select } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useState, useEffect } from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useCollection } from '../hooks/useCollection'
import { projectFirestore } from "../Firebase/firebase";



function Account( {user}) {
  
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  
  const { addDocument, response } = useFirestore('statuses')
  const { documents, error } = useCollection(
    'statuses', ["uid", "==", user.uid]);

  const [name, setName] = useState(null)
  
  if( documents ) {
    console.log(documents[0].name)
    
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
      uid : user.uid, 
      name, 
      likes : null,
      loves : null,
      loveCount : 0,
      likeCount : 0,
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
  useEffect(() => {
    if (response.success) {
      onReset();
    }
  }, [response.success])


  return (
    <div>
      <Layout align="middle">
        <h3>
          Set Your Status 
        </h3>

        <Content>

          {documents && 
            <p>
              {documents[0].name}
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
            { !documents && <Button type='primary' htmlType="submit" onClick={handleSubmit}> 
                Submit
            </Button>}
            { documents && <Button type="secondary" onClick={handleUpdate}>
                Update Status
            </Button>}
          </Form>
        </Content>
      </Layout>
    </div>
  )
}

export default Account
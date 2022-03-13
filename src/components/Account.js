import "../css/account.css"
import React from 'react'
import {Layout} from 'antd'
import { Form, Input, Button, Select } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useState, useEffect } from 'react'
import { useFirestore } from '../hooks/useFirestore'




function Account( {user}) {
  
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  const [name, setName] = useState('')
  const { addDocument, response } = useFirestore('statuses')


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
            <Button type='primary' htmlType="submit" onClick={handleSubmit}> 
                Submit
            </Button>
          </Form>
        </Content>
      </Layout>
    </div>
  )
}

export default Account
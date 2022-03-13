import "../css/account.css"
import React from 'react'
import {Layout} from 'antd'
import { Form, Input, Button, Select } from 'antd';
import { Content } from 'antd/lib/layout/layout';


function Account() {
  return (
    <div>
      <Layout align="middle">
        <h3>
          Set Your Status 
        </h3>
        <Content>
          <Form align="middle">
            <Form.Item
              name = ""
            >
              <Input style={{ maxWidth : "60vw"}}/>
            </Form.Item>
            <Button type='primary'> 
                Submit
              </Button>
          </Form>
        </Content>
      </Layout>
    </div>
  )
}

export default Account
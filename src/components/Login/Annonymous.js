import React from 'react'
import { Content } from 'antd/lib/layout/layout'
import { Button } from 'antd'
import { UnlockOutlined } from '@ant-design/icons'

function Annonymous() {
  return (
    <div>
        <Content>
            <Button
            icon={<UnlockOutlined />}
            type="primary"
            >
                Annonymous Login
            </Button>
        </Content>
    </div>
  )
}

export default Annonymous
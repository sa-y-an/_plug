import React from 'react';
import '../css/post.css';
import { Skeleton, Card,Avatar, Row, Col } from 'antd';
import { UserOutlined, HeartOutlined, DislikeOutlined, LikeOutlined} from '@ant-design/icons';
const { Meta } = Card;


function Post({statuses}) {
  console.log(statuses)

  return (
    <div className='post'>
      <Row type="flex" align="middle" style={{justifyContent: 'center'}}>
        <Col >
          <Card
            style={{ width: 300, marginTop: 16, horizontalAlign: 'middle',
          }}
            actions={[
              <LikeOutlined/> ,
              <HeartOutlined />,
              <DislikeOutlined />,
              
            ]}
          >
            <Skeleton loading={false} avatar active>
              <Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title="Card title"
                description="This is the description"
          />
            </Skeleton>
          </Card>
        </Col>
      </Row>

      <br />
      { statuses.map((status) => (
        <li key={status.id}>
          <p >{status.name}</p>
        </li>
      ))}

    </div>
  )
}

export default Post
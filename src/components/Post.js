import React from 'react';
import '../css/post.css';
import { Skeleton, Card,Avatar } from 'antd';
import { UserOutlined, HeartOutlined, DislikeOutlined, LikeOutlined} from '@ant-design/icons';
const { Meta } = Card;

function Post({name, desription, message, photoUrl}) {
  return (
    <div className='post'>
        <Card
          style={{ width: 300, marginTop: 16 }}
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

    </div>
  )
}

export default Post
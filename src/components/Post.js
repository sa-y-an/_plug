import React from 'react';
import '../css/post.css';
import { Skeleton, Card,Avatar, Row, Col,Typography } from 'antd';
import { UserOutlined, HeartOutlined, DislikeOutlined, LikeOutlined} from '@ant-design/icons';
const { Meta } = Card;
const { Text} = Typography;


function Post({statuses}) {
  console.log(statuses)

  return (
    <div className='post'>
      <Row type="flex" align="middle" style={{justifyContent: 'center'}}>
        <Col >

          { statuses.map( (post) => (
            <Card key={post.id}
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
                avatar={<Avatar src={post.picUrl}/>}
                title={post.pname}
                description= {post.name} 
          />
            {/* <p> 

              <hr/>
              
              <li>
                <Text type="secondary" > LikeCount : {post.likeCount} </Text>  
              </li>
              <li>
              <Text type="secondary" > BookMarked : {post.loveCount} </Text>
              </li>
            </p> */}
            </Skeleton>
          </Card>
          ))}

          </Col>

      </Row>

    </div>
  )
}

export default Post
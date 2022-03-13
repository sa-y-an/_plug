import React from 'react';
import '../css/post.css';
import { Skeleton, Card,Avatar, Row, Col,Typography, Button } from 'antd';
import { UserOutlined, HeartOutlined, DislikeOutlined, LikeOutlined} from '@ant-design/icons';
import Like from './btnComponents/Like';
import Dislike from './btnComponents/Dislike';

const { Meta } = Card;


function Post({statuses, user}) {

  return (
    <div className='post'>
      <Row type="flex" align="middle" style={{justifyContent: 'center'}}>
        <Col >

          { statuses.map( (post) => (
            <Card key={post.id}
            style={{ width: 300, marginTop: 16, horizontalAlign: 'middle',
          }}
          >
            <Skeleton loading={false} avatar active>
              <Meta
                avatar={<Avatar src={post.picUrl}/>}
                title={post.pname}
                description= {post.name} 
          />
            </Skeleton>
            <hr/>
            <div  className='additional'> 
              <div className="container" >
                <div className="likes">
                  <div className="icon-square">
                    <Like user={user} post = {post}/>
                    {post.likeCount}
                  </div>
                </div>

                <div className="love">
                  <div className="icon-square">
                    <HeartOutlined/>
                    
                    Follow 
                    
                  </div>
                </div>


                <div className="dislike">
                  <div className="icon-square">
                  <Dislike user={user} post= {post} />
                  {post.dislikeCount}
                  </div>
                  
                </div>
              </div>
            </div>

          </Card>
          ))}
          
          </Col>

      </Row>

    </div>
  )
}

export default Post
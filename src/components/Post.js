import React from 'react';
import '../css/post.css';
import { Skeleton, Card,Avatar, Row, Col,Typography, Button } from 'antd';
import Like from './btnComponents/Like';
import Dislike from './btnComponents/Dislike';
import Favourite from './btnComponents/Favourite';

const { Meta } = Card;


function Post({statuses, user}) {

  return (
    <div className='post'>
      <Row type="flex" align="middle" style={{justifyContent: 'center'}}>
        <Col >

          { statuses.map( (post) => (
            <Card key={post.id}
            style={{ width: 400, marginTop: 16, horizontalAlign: 'middle', background : "rgba(0,0,0,0.03)",
            borderRadius : "1.5em", boxShadow : "1px 1px"
          }}
          >
            <Skeleton loading={false} avatar active>
              <Meta
                avatar={<Avatar src={post.picUrl} style={{boxShadow:"0 1.5px black", marginLeft : 25 , marginTop : 25 }}/>}
                title={post.pname}
                description= {post.name} 
          />
            </Skeleton>
            <br />
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
                    <Favourite user={user} post={post}/>  
                    {post.loveCount}           
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
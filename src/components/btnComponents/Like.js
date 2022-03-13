import React, { useState } from 'react'
import { UserOutlined, HeartOutlined, DislikeOutlined, LikeOutlined, LikeFilled} from '@ant-design/icons';
import { projectFirestore } from "../../Firebase/firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

function Like({user, post}) {

  const likePhoto = (e,post) => {
    const db = projectFirestore.collection("statuses")
    db.doc(post.id).update ( {
      likeCount : post.likeCount + 1,
      likes : arrayUnion(user.uid)
    })
  }

  let already = false;

  if( post.likes.includes(user.uid)) {
    console.log("hello")
    already = true;
  }

  const unLikePhoto = (e,post) => {
    const db = projectFirestore.collection("statuses")
    db.doc(post.id).update ( {
      likeCount : post.likeCount - 1,
      likes : arrayRemove(user.uid)
    })
    already = !already
  }

  return (
    <div>
        { !already && <LikeOutlined onClick={ (e) => likePhoto(e,post)}/>} 
        { already &&  <LikeFilled onClick={ (e) => unLikePhoto(e,post)}/> }
    </div>
  )
}

export default Like
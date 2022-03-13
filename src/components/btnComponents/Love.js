import React, { useState } from 'react'
import { HeartOutlined, HeartFilled} from '@ant-design/icons';
import { projectFirestore } from "../../Firebase/firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

function Like({user, post}) {

  const likePhoto = (e,post) => {
    const db = projectFirestore.collection("statuses")
    db.doc(post.id).update ( {
      loveCount : post.loveCount + 1,
      loves : arrayUnion(user.uid)
    })
  }

  let already = false;

  if( post.loves.includes(user.uid)) {
    console.log("hello")
    already = true;
  }

  const unLikePhoto = (e,post) => {
    const db = projectFirestore.collection("statuses")
    db.doc(post.id).update ( {
      loveCount : post.loveCount - 1,
      loves : arrayRemove(user.uid)
    })
    already = !already
  }

  return (
    <div>
        { !already && <HeartOutlined onClick={ (e) => likePhoto(e,post)}/>} 
        { already &&  <HeartFilled onClick={ (e) => unLikePhoto(e,post)}/> }
    </div>
  )
}

export default Like
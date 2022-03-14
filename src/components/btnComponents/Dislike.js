import React from 'react'
import { DislikeOutlined,DislikeFilled, DislikeTwoTone} from '@ant-design/icons';
import { projectFirestore } from "../../Firebase/firebase";
import { arrayUnion, arrayRemove } from "firebase/firestore";

function Dislike({user, post}) {

  if( user.uid === post.uid) {
    return (
      <div>
        <DislikeTwoTone />
      </div>
    )
  }


  const dislikePhoto = (e,post) => {
    const db = projectFirestore.collection("statuses")
    db.doc(post.id).update ( {
      dislikeCount : post.dislikeCount + 1,
      dislikes : arrayUnion(user.uid)
    })
  }

  let already = false;

  if( post.dislikes.includes(user.uid)) {
    already = true;
  }

  const undisLikePhoto = (e,post) => {
    const db = projectFirestore.collection("statuses")
    db.doc(post.id).update ( {
      dislikeCount : post.dislikeCount - 1,
      dislikes : arrayRemove(user.uid)
    })
    already = !already
  }

  return (
    <div>
        { !already && <DislikeOutlined onClick={ (e) => dislikePhoto(e,post)}/>} 
        { already &&  <DislikeFilled onClick={ (e) => undisLikePhoto(e,post)}/> }
    </div>
  )
}

export default Dislike
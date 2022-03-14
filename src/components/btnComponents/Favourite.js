import { HeartOutlined, HeartFilled, HeartTwoTone } from "@ant-design/icons";
import { projectFirestore } from "../../Firebase/firebase";
import { arrayUnion, arrayRemove } from "firebase/firestore";


import React from "react";

function Favourite({ user, post }) {
    
    if( user.uid === post.uid) {
        return (
          <div>
            <HeartTwoTone />
          </div>
        )
      }
    

  const favouritePhoto = (e, post) => {
    const db = projectFirestore.collection("statuses");
    db.doc(post.id).update({
      loveCount: post.loveCount + 1,
      loves: arrayUnion(user.uid),
    });
  };

  let already = false;

  if (post.loves.includes(user.uid)) {
    console.log("hello");
    already = true;
  }

  const unFavouritePhoto = (e, post) => {
    const db = projectFirestore.collection("statuses");
    db.doc(post.id).update({
      loveCount: post.loveCount - 1,
      loves: arrayRemove(user.uid),
    });
    already = !already;
  };

  return (
    <div>
      { !already && <HeartOutlined onClick={ (e) => favouritePhoto(e,post)}/>} 
      { already &&  <HeartFilled onClick={ (e) => unFavouritePhoto(e,post)}/> }
    </div>
  );
}

export default Favourite;

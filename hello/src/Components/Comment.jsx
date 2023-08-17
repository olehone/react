import React, { useState } from "react";
import Likes from "./Likes";
function Comment({comment, changeCountOfLikes, postId}) {
  return (
    <div className="Comment">
      <div className="username">{comment.username}</div>
      <div className="comment">{comment.text}</div>
      <Likes changeCountOfLikes ={changeCountOfLikes} countOfLikes={comment.countOfLikes} postId={postId} commentId={comment.id}/>
    </div>
  );
}
export default Comment;

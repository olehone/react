import React, { useState } from "react";
import Likes from "./Likes";
function Comment({comment}) {
  return (
    <div className="Comment">
      <div className="username">{comment.username}</div>
      <div className="comment">{comment.text}</div>
      <Likes countOfLikes={comment.countOfLikes}/>
    </div>
  );
}
export default Comment;

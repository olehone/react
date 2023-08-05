import React, { useState } from "react";
import Likes from "./Likes";

function Post({post}) {
  console.log(post);  
  return (
    <div className="Post">
      <strong>{post.id}. "{post.title}"</strong>
      <div>{post.description}</div>
    <Likes/>
    </div>
    
  );
}
export default Post;

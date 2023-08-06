import React, { useState } from "react";
import Likes from "./Likes";
import Comments from "./Comments";

function Post({ post }) {
  console.log(post);
  console.log(post.comments);
  // console.log(comments);
  return (
    <div className="Post">
      <strong>
        {post.id}. "{post.title}"
      </strong>
      <div>{post.description}</div>
      <Likes />
      <Comments comments={post.comments} />
    </div>
  );
}
export default Post;

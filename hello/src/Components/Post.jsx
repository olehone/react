import React, { useState } from "react";
import Likes from "./Likes";
import Comments from "./Comments";

function Post({ post }, { comments }) {
  console.log(post);
  // console.log(comments);
  return (
    <div className="Post">
      <strong>
        {post.id}. "{post.title}"
      </strong>
      <div>{post.description}</div>
      <Likes />
      <Comments comments={comments} />
    </div>
  );
}
export default Post;

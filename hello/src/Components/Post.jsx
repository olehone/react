import React, { useState } from "react";
import Likes from "./Likes";
import Comments from "./Comments";

function Post({ post }) {
  console.log(post);
  return (
    <div className="Post">
      <strong>
        {post.id}. "{post.title}"
      </strong>
      <div>{post.description}</div>
      <Likes countOfLikes = {post.countOfLikes} />
      <Comments comments={post.comments} />
    </div>
  );
}
export default Post;

import React, { useState } from "react";
import Likes from "./Likes";
import Comments from "./Comments";
import NewCommentForm from "./NewCommentForm";

function Post({ post }, addComment) {
  const comments =post.comments;
  console.log("lfsdjfs")
  console.log(comments);
  console.log(post);
  
  return (
    <div className="Post">
      <strong>
        {post.id}. "{post.title}"
      </strong>
      <div>{post.description}</div>
      <Likes countOfLikes={post.countOfLikes} />
      <Comments comments={post.comments} />
      <NewCommentForm addComment = {(newComment) => addComment(post.id, newComment)} length={post.comments.length} postId = {post.id} />
    </div>
  );
}
export default Post;

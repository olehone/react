import React, { useState } from "react";
import Likes from "./Likes";
import Comments from "./Comments";
import NewCommentForm from "./NewCommentForm";
import MyButton from "./UI/Button/MyButton.jsx";

function Post({ post , addComment}) {
  const comments = post.comments;
  return (
    <div className="Post">
      <strong>
        {post.id}. "{post.title}"
      </strong>
      <div>{post.description}</div>
      <Likes countOfLikes={post.countOfLikes} />
      <Comments comments={post.comments} />
      <NewCommentForm
        addComment={addComment}
        length={post.comments.length}
        postId={post.id}
      />
    </div>
  );
}
export default Post;

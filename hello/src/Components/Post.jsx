import React, { useState } from "react";
import Likes from "./Likes";
import Comments from "./Comments";
import NewCommentForm from "./NewCommentForm";

function Post({ post }, { onAddComment }) {
  const comments = post.comments;
  return (
    <div className="Post">
      <strong>
        {post.id}. "{post.title}"
      </strong>
      <button
        onClick={() => {
          onAddComment(1, { id: 5, username: "peter", text: "hello" });
        }}
      >
        Add Comment
      </button>
      <div>{post.description}</div>
      <Likes countOfLikes={post.countOfLikes} />
      <Comments comments={post.comments} />
      <NewCommentForm
        addComment={onAddComment}
        length={post.comments.length}
        postId={post.id}
      />
    </div>
  );
}
export default Post;

import React, { useState } from "react";
import Post from "./Post";
import MyButton from "../Components/UI/Button/MyButton.jsx";
function PostList({ posts, addComment }) {
  return (
    <div className="PostList">
      <h1 style={{ textAlign: "center" }}>List of posts</h1>
      <MyButton
        onClick={() => {
          addComment(1, { id: 5, username: "peter", text: "hello" });
        }}
      >
        Add Comment
      </MyButton>
      {posts.map((post) => (
        <Post key={post.Id} post={post} onAddComment={addComment} />
      ))}
    </div>
  );
}
export default PostList;

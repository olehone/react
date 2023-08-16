import React, { useState } from "react";
import Post from "./Post";
import MyButton from "../Components/UI/Button/MyButton.jsx";
function PostList({ posts, addComment}) {
  return (
    <div className="PostList">
      <h1 style={{ textAlign: "center" }}>List of posts</h1>
      {posts.map((post) => (
        <Post addComment = {addComment} key={post.Id} post={post} onAddComment={addComment} />
      ))}
    </div>
  );
}
export default PostList;

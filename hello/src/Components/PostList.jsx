import React, { useState } from "react";
import Post from "./Post";
import MyButton from "../Components/UI/Button/MyButton.jsx";
function PostList({ posts, addComment, changeCountOfLikes}) {
  return (
    <div className="PostList">
      <h1 style={{ textAlign: "center" }}>List of posts</h1>
      {posts.map((post) => (
        <Post changeCountOfLikes ={changeCountOfLikes} addComment = {addComment} key={post.id} post={post} onAddComment={addComment} />
      ))}
    </div>
  );
}
export default PostList;

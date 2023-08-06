import React, { useState } from "react";
import Post from "./Post";

function PostList({ posts, onAddComment}) {

  return (
    <div className="PostList">
      <h1 style={{ textAlign: "center" }}>List of posts</h1>
      {posts.map((post)=> <Post post = {post} key = {post.id} />)}
    </div>
  );
}
export default PostList;

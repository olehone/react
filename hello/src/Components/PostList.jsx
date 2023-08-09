import React, { useState } from "react";
import Post from "./Post";

function PostList({ posts, addComment}) {
  return (
    <div className="PostList">
      <h1 style={{ textAlign: "center" }}>List of posts</h1>
      <button onClick={()=>{addComment(1,{id:5, username:"peter", text: "hello"})}}>Add Comment</button>
      {posts.map((post)=> <Post key = {post.Id} post = {post} onAddComment={addComment} />)}
    </div>
  );
}
export default PostList;

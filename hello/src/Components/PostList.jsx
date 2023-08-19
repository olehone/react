import React, { useState } from "react";
import Post from "./Post";
import MyButton from "../Components/UI/Button/MyButton.jsx";
function PostList({ posts, addComment, changeCountOfLikes}) {
  if(posts.length>0)
  {
    return (
      <div className="PostList">
        <h1 style={{ textAlign: "center" }}>List of posts</h1>
        {posts.map((post) => (
          <Post changeCountOfLikes ={changeCountOfLikes} addComment = {addComment} key={post.id} post={post} onAddComment={addComment} />
        ))}
      </div>
    );
  }
  return(
    <div className=" PostList">
    <h1 style={{ textAlign: "center" }}>No posts found</h1>
    </div>
  )
}
export default PostList;

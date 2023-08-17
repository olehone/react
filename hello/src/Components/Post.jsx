import React, { useState } from "react";
import Likes from "./Likes";
import Comments from "./Comments";
import NewCommentForm from "./NewCommentForm";
import MyButton from "./UI/Button/MyButton.jsx";

function Post({ post , addComment, changeCountOfLikes}) {  return (
    <div className="Post">
      <strong>
        {post.id}. "{post.title}"
      </strong>
      <div>{post.description}</div>
      <Likes changeCountOfLikes = {changeCountOfLikes} countOfLikes={post.countOfLikes} postId ={post.id}/>
      <Comments changeCountOfLikes ={changeCountOfLikes} comments={post.comments} postId ={post.id} />
      <NewCommentForm
        addComment={addComment}
        length={post.comments.length}
        postId={post.id}
      />
    </div>
  );
}
export default Post;

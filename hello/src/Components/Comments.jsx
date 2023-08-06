import React, { useState } from "react";
import Comment from "./Comment";
function CheckComentsExists({ comments }) {
  // comments.map((comment)=><Comment />);
}
function Comments({ comments }) {
  console.log({ comments });
  if(comments.length>0){
    return (
      <div className="comments">
        <h6 className="title">Comments</h6>
        {comments.map((comment) => (<Comment comment={comment} key={comment.id} />
        ))}
      </div>
    )
  }
  return (
    <div>
      <h6>No comments</h6>
    </div>
  );
}
export default Comments;

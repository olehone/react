import React, { useState } from "react";
function Comment({comment}) {
  return (
    <div className="Comment">
      <div className="username">{comment.username}</div>
      <div className="comment">{comment.text}</div>
    </div>
  );
}
export default Comment;

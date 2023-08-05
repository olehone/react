import React, { useState } from "react";

function Comment() {
  const [text, setText] = useState("Write!");
  return (
    <div className="Comment">
      <h2> It`s your comment</h2>
      <strong>{text}</strong>
      <input type="text" value = {text}
      onChange={event => setText(event.target.value)}/>
    </div>
  );
}
export default Comment;

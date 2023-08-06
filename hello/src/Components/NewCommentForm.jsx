import React from "react";
import { useState } from "react";
import addComment from "../App";
function NewCommentForm( length, postId ) {
  const [text, setText] = useState("");
 console.log(11111);
  const handleSubmit = (e) => {
    console.log(1111113);
    e.preventDefault();
    const newComment = {
      id: length + 1,
      username: "pedro",
      text: text,
    };
    console.log(111211);
    console.log(newComment);
    addComment(postId,newComment);
    console.log(11221111);

    setText("");
  };
  return (
    <div className="form-group">
      <h2>Add a new Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-control"
          placeholder="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          style={{ margin: 10 }}
          className="btn btn-primary"
          type="submit"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
}
export default NewCommentForm;

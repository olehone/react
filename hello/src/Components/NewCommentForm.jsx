import React, { useState } from "react";
import addComment from "../App";
function NewCommentForm({ length, postId, addComment }) {
  const [text, setText] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: length + 1,
      username: "pedro",
      text: text,
    };

    addComment(postId, newComment);

    setText("");
  };

  return (
    <div className="form-group">
      <h2>Add a new Comment</h2>
      <form onSubmit={handleCommentSubmit}>
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

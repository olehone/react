import React, { useState } from "react";
import addComment from "../App";
import MyButton from "./UI/Button/MyButton.jsx";
function NewCommentForm({ length, postId, addComment }) {
  const [text, setText] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if(text==="")
    {
      return;
    }
    const newComment = {
      id: length + 1,
      username: "pedro",
      text: text,
      countOfLikes: 0,
    };

    addComment(postId, newComment);

    setText("");
  };

  return (
    <div className="form-group">
      <h4>Add a new Comment</h4>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          className="form-control"
          placeholder="Your comment"
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

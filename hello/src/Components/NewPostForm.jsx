import React from "react";
import MyInput from "./UI/Input/MyInput.jsx";
import { useState } from "react";
import MyButton from "./UI/Button/MyButton.jsx";
function NewPostForm({ onAddPost, length }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: length + 1,
      title: title,
      description: description,
      comments: [],
      countOfLikes: 0,
    };
    onAddPost(newPost);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="form-group">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <MyInput
          className="form-control narrower"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <MyButton
        props={{ text: "add"}}
          type={"submit"}
          text = {"Add post pls"}
        >
        </MyButton>
      </form>
    </div>
  );
}
export default NewPostForm;

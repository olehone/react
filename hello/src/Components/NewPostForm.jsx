import React from "react";
import MyInput from "./UI/Input/MyInput.jsx";
import { useState } from "react";
import MyButton from "./UI/Button/MyButton.jsx";
function NewPostForm({ onAddPost, length }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(121234)
    const newPost = {
      id: length + 1,
      title: title,
      description: description,
      comments: [],
      countOfLikes: 0,
    };
    console.log("description:" +description)
    
    console.log("title:" + title)

    onAddPost(newPost);
    setTitle("");
    console.log("title:" + title)
    setDescription("");
  };

  return (
    <div className="form-group">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <MyInput
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
          type={"submit"}
          text = {"Add post pls"}
        >
        </MyButton>
      </form>
    </div>
  );
}
export default NewPostForm;

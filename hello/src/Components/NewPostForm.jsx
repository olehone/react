import React from "react";
import { useState } from "react";
function NewPostForm({ onAddPost, length }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: length + 1, // Generate a unique ID, you can use a library like uuid
      title: title,
      description: description,
      comments: [] // You can start with an empty array of comments
    };
    onAddPost(newPost);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="form-group">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
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
        <button style = {{margin: 10}} className= "btn btn-primary"type="submit">Add Post</button>
      </form>
    </div>
  );
}
export default NewPostForm;
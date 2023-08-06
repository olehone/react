import React, { useState } from "react";
import Comment from "./Components/Comment";
import Likes from "./Components/Likes";
import "./Styles/App.css";
import NewPostForm from "./Components/NewPostForm";
import PostList from "./Components/PostList";
function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "HTML",
      description: "Yee, i`m a html-programmer",
      comments: [{ id: 1, username: "Frederico13", text: "i think it`s worse, no?" },
      { id: 2, username: "Peter228", text: "cool" },
      { id: 3, username: "Iloveminecraft", text: "hey!" },],
    },
    {
      id: 2,
      title: ".Net",
      description:
        "Yee, it`s something about internet like .com .gov .org and more, i know it",
      comments: [
        { id: 1, username: "Frederico13", text: "i think it`s worse, no?" },
        { id: 2, username: "Peter228", text: "cool" },
        { id: 3, username: "Iloveminecraft", text: "hey!" },
      ],
    },
    {
      id:3,
      title: "test",
      description: "test description",
      comments:[],
    },
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React Blog App</h1>
      <PostList posts={posts} />
      <NewPostForm onAddPost={addPost} length={posts.length} />
    </div>
  );
}

export default App;

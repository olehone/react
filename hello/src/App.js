import React, { useState } from "react";
import Comment from "./Components/Comment";
import Likes from "./Components/Likes";
import "./Styles/App.css";
// import "./Components/UI/CheckBox/MyCheckBox.module.css"
import { ReactDOM } from "react";
import NewPostForm from "./Components/NewPostForm";
import PostList from "./Components/PostList";
import MySwitch from "./Components/UI/Switch/MySwitch";
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "HTML",
      description: "Yee, i`m a html-programmer",
      comments: [
        { id: 1, username: "Frederico13", text: "i think it`s worse, no?" },
        { id: 2, username: "Peter228", text: "cool" },
        { id: 3, username: "Iloveminecraft", text: "hey!" },
      ],
      countOfLikes: 4,
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
      countOfLikes: 2,
    },
    {
      id: 3,
      title: "test",
      description: "test description",
      comments: [],
      countOfLikes: 1,
    },
  ]);

  function addComment (postId, newComment) {
    const updatedPost = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newComment],
        };
      }
      return post;
    });
    setPosts(updatedPost);
  };
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React Blog App</h1>
      <PostList posts={posts} addComment={addComment} />
      <NewPostForm onAddPost={addPost} length={posts.length} />
      <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
      <MySwitch text={"hello"} initialCheck = {false}/>
    </div>
  );
}

export default App;

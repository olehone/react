import React, { useState } from "react";
import Comment from "./Components/Comment";
import Likes from "./Components/Likes";
import "./Styles/App.css";
// import "./Components/UI/CheckBox/MyCheckBox.module.css"
import { ReactDOM } from "react";
import NewPostForm from "./Components/NewPostForm";
import PostList from "./Components/PostList";
import MySwitch from "./Components/UI/Switch/MySwitch";
import NotAllThreeAtOnce from "./Components/NotAllThreeAtOnce";
import MyButton from "./Components/UI/Button/MyButton";
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
        { id: 1, username: "Frederico13", text: "i think it`s worse, no?", countOfLikes: 13},
        { id: 2, username: "Peter228", text: "cool", countOfLikes: 2 },
        { id: 3, username: "Iloveminecraft", text: "hey!", countOfLikes: 5 },
      ],
      countOfLikes: 4,
    },
    {
      id: 2,
      title: ".Net",
      description:
        "Yee, it`s something about internet like .com .gov .org and more, i know it",
      comments: [
        { id: 1, username: "Frederico13", text: "i think it`s worse, no?" , countOfLikes: 5},
        { id: 2, username: "Peter228", text: "cool" , countOfLikes: 5},
        { id: 3, username: "Iloveminecraft", text: "hey!" , countOfLikes: 5},
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
  function addComment(postId, newComment) {
    console.log("hello");
    const updatedPost = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newComment],
        };
      }
      return post;
    });
    console.log(updatedPost);
    setPosts(updatedPost);
  }
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  return (
    <div className="App">
      <NotAllThreeAtOnce
        text1={"Вчитись в політехніці"}
        text2={"Мати стійке психічне здоров'я"}
        text3={"Бути успішним"}
      />
      <h1 style={{ textAlign: "center" }}>React Blog App</h1>
      <PostList addComment = {addComment} posts={posts} />
      <NewPostForm onAddPost={addPost} length={posts.length} />
    </div>
  );
}

export default App;

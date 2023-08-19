import React, { useMemo, useState } from "react";
import Comment from "./Components/Comment";
import Likes from "./Components/Likes";
import "./Styles/App.css";
// import "./Components/UI/CheckBox/MyCheckBox.module.css"
import NewPostForm from "./Components/NewPostForm";
import PostList from "./Components/PostList";
import MySwitch from "./Components/UI/Switch/MySwitch";
import NotAllThreeAtOnce from "./Components/NotAllThreeAtOnce";
import MyButton from "./Components/UI/Button/MyButton";
import MySelect from "./Components/UI/Select/MySelect";
import MyInput from "./Components/UI/Input/MyInput";
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "HTML",
      countOfLikes: 1,
      description: "Yee, i`m a html-programmer",
      comments: [
        {
          id: 1,
          username: "Frederico13",
          text: "i think it`s worse, no?",
          countOfLikes: 13,
        },
        { id: 2, username: "Peter228", text: "cool", countOfLikes: 2 },
        { id: 3, username: "Iloveminecraft", text: "hey!", countOfLikes: 5 },
      ],
    },
    {
      id: 2,
      title: ".Net",
      countOfLikes: 2,
      description:
        "Yee, it`s something about internet like .com .gov .org and more, i know it",
      comments: [
        {
          id: 1,
          username: "Frederico13",
          text: "i think it`s worse, no?",
          countOfLikes: 5,
        },
        { id: 2, username: "Peter228", text: "cool", countOfLikes: 5 },
        { id: 3, username: "Iloveminecraft", text: "hey!", countOfLikes: 5 },
      ],
    },
    {
      id: 3,
      title: "test",
      countOfLikes: 1,
      description: "test description",
      comments: [],
    },
  ]);
  function changeCountOfLikes(postId, newCount, commentId) {
    console.log("hello");
    if (!postId) return;
    if (!newCount) return;
    if (!commentId) {
      const updatedPost = posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            countOfLikes: newCount,
          };
        } else {
          console.log("No");
        }
        return post;
      });
      setPosts(updatedPost);
    } else {
      const updatedPost = posts.map((post) => {
        if (post.id === postId) {
          const updatedComments = post.comments.map((comment) => {
            if (comment.id === commentId) {
              return { ...comment, countOfLikes: newCount };
            }
            return comment;
          });
          console.log(updatedComments);
          return {
            ...post,
            comments: updatedComments,
          };
        }
        return post;
      });
      setPosts(updatedPost);
    }
  }
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
  const [selectedSort, setSelectedSort] = useState("");

  const sortedPost = useMemo(() => {
    console.log("sortedddd!");
    if (!selectedSort) {
      return posts;
    }
    if (selectedSort === "likes") {
      console.log([...posts].sort((a, b) => b.countOfLikes - a.countOfLikes));
      return [...posts].sort((a, b) => b.countOfLikes - a.countOfLikes);
    }
    if (selectedSort === "title") {
      return [...posts].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (selectedSort === "description") {
      return [...posts].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    }
    return posts;
  }, [selectedSort, posts]);
  const sortedAndSearchPosts = useMemo(() => {
    console.log("search input is" +searchInput +".")
    if (searchInput)
      return sortedPost.filter((post) => post.title.toLowerCase().includes(searchInput.toLowerCase()));
    return sortedPost;
  }, [searchInput, sortedPost]);
  return (
    <div className="App">
      <NotAllThreeAtOnce
        text1={"Вчитись в політехніці"}
        text2={"Мати стійке психічне здоров'я"}
        text3={"Бути успішним"}
      />
      <h1 style={{ textAlign: "center" }}>React Blog App</h1>
      <NewPostForm onAddPost={addPost} length={posts.length} />
      <MyInput
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <MySelect
        onChange={setSelectedSort}
        value={selectedSort}
        defaultTitle={"Сортування"}
        options={[
          { value: "likes", name: "По популярності" },
          { value: "title", name: "По заголовку" },
          { value: "description", name: "По опису" },
        ]}
      />
      <PostList
        changeCountOfLikes={changeCountOfLikes}
        addComment={addComment}
        posts={sortedAndSearchPosts}
      />
    </div>
  );
}

export default App;

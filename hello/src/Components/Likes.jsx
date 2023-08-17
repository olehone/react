import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/App.css";

function Likes({ countOfLikes, changeCountOfLikes, postId, commentId }) {
  const [likes, setLikes] = useState(countOfLikes);

  function increment() {
    setLikes(likes + 1);
    if (commentId) {
      changeCountOfLikes(postId, likes+1, commentId);
      return;
    }
    changeCountOfLikes(postId, likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
    if (commentId) {
      changeCountOfLikes(postId, likes -1, commentId);
      return;
    }
    changeCountOfLikes(postId, likes - 1);
  }

  return (
    <div className="Likes">
      <button className="btn btn-light like" onClick={increment}>
        👍
      </button>
      <div className="btn">{likes}</div>
      <button className="btn btn-light dislike" onClick={decrement}>
        👎
      </button>
    </div>
  );
}

export default Likes;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.css";

function Likes() {
  const [likes, setLikes] = useState(0);

  function increment() {
    setLikes(likes + 1);
    console.log("likes is " + likes);
  }

  function decrement() {
    setLikes(likes - 1);
    console.log("likes is " + likes);
  }

  return (
    <div className="Likes">
      <button className="btn btn-light like" onClick={increment}>
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <h1>{likes}</h1>
      <button className="btn btn-light dislike" onClick={decrement}>
        <FontAwesomeIcon icon={faThumbsDown} />
      </button>
    </div>
  );
}

export default Likes;
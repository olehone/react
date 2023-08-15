import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/App.css";
import MyCheckBox from "./UI/Switch/MySwitch";

function Likes({countOfLikes}) {
  const [likes, setLikes] = useState(countOfLikes);

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
      <MyCheckBox text = {"Дідько як же я люблю доту"} isCheck = {false}/>
      <button className="btn btn-light like" onClick={increment}>👍</button>
      <div className="btn">{likes}</div>
      <button className="btn btn-light dislike" onClick={decrement}>👎</button>
    </div>
  );
}

export default Likes;

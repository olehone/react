import React, { useState } from "react";
import Search from "./Search";
function App() {
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
    <div className="App">
      Hello!
      <h1>{likes}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <Search />
      <Search />
      <Search />
      <Search />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Comment from "./Comment";
import Likes from "./Likes";
import "./Styles/App.css"
function App() {
  const [likes, setLikes] = useState(0);
  return (
    <div className="App">
      <h1>Wellcome to forum!</h1>
      <Likes />
      <Comment />
      <div className="post">
        <div className="post__content">
          <strong> Привітики</strong>
          <div>Починаємо навчання</div>
        </div>
      </div>
      <div className="post__btns"> <button>Видалити</button></div>
    </div>
  );
}

export default App;

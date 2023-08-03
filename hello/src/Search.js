import React, { useState } from "react";

function Search() {
  const [text, setText] = useState("Ms. Beast!");
  return (
    <div className="Search">
      <h2> hell2</h2>
      <h1>{text}</h1>
      <input type="text" value = {text}
      onChange={event => setText(event.target.value)}/>
    </div>
  );
}
export default Search;

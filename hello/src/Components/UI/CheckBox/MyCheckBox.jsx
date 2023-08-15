import React, { useState } from "react";
import classes from "./MyCheckBox.module.css";

function MyCheckBox({initialCheck, text}) {
  const [isCheck, change] = useState(initialCheck);

  function checkBoxChange() {
    change(!isCheck);
  }

  return (
    <div>
        <input
          type="checkbox"
          checked={isCheck}
          onChange={checkBoxChange}
        />
        {text}
        <sty>
          
        </sty>
    </div>
  );
}

export default MyCheckBox;

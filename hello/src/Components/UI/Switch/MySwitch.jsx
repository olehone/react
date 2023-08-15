import React, { useState } from "react";
import classes from "./MySwitch.module.css";

function MySwitch({initialCheck, text}) {
  const [isCheck, change] = useState(initialCheck);

  function switchChange() {
    change(!isCheck);
  }

  return (
    <div className={classes.container} >
      {text}
      <div className={classes.right}> 
      <label className={classes.switch}>
        <input
          type="checkbox"
          checked={isCheck}
          onChange={switchChange}
        />
        <span className={`${classes.slider} ${classes.round}`}>
          
        </span>
        </label>
      </div>
    </div>
  );
}

export default MySwitch;

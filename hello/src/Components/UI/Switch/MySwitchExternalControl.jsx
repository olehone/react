import React, { useState } from "react";
import classes from "./MySwitch.module.css";

function MySwitchExternalControl({ exIsCheck, exChange, text, onSwitchChange }) {
  const [isCheck, change] = ;
  
  function switchChange() {
    if (onSwitchChange) {
      onSwitchChange(!isCheck);
    }
    change(!isCheck);
  }

  return (
    <div className={classes.container}>
      {text}
      <div className={classes.right}>
        <label className={classes.switch}>
          <input type="checkbox" checked={isCheck} onChange={switchChange} />
          <span className={`${classes.slider} ${classes.round}`}></span>
        </label>
      </div>
    </div>
  );
}

export default MySwitchExternalControl;

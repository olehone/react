import React, { useState } from "react";
import MySwitch from "./UI/Switch/MySwitch";
import classes from "./UI/Switch/MySwitch.module.css";

function NotAllThreeAtOnce({ text1, text2, text3 }) {
  const [isCheck1, change1] = useState(false);
  const [isCheck2, change2] = useState(false);
  const [isCheck3, change3] = useState(false);

  function switchChange1() {
    change1(!isCheck1);
    if (isCheck2 && isCheck3) {
      if (Math.random() < 0.5) {
        change2(!isCheck2);
        return;
      }
      change3(!isCheck3);
    }
  }
  function switchChange2() {
    change2(!isCheck2);
    if (isCheck1 && isCheck3) {
      if (Math.random() < 0.5) {
        change1(!isCheck1);
        return;
      }
      change3(!isCheck3);
    }
  }
  function switchChange3() {
    change3(!isCheck3);
    if (isCheck2 && isCheck1) {
      if (Math.random() < 0.5) {
        change2(!isCheck2);
        return;
      }
      change1(!isCheck1);
    }
  }

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.text}>
          {text1}
          </div>
          <div className={classes.right}>
            <label className={classes.switch}>
              <input
                type="checkbox"
                checked={isCheck1}
                onChange={switchChange1}
              />
              <span className={`${classes.slider} ${classes.round}`}></span>
            </label>
          </div>
        
      </div>
      <div className={classes.container}>
      <div className={classes.text}>
          {text2}
          </div>
        <div className={classes.right}>
          <label className={classes.switch}>
            <input
              type="checkbox"
              checked={isCheck2}
              onChange={switchChange2}
            />
            <span className={`${classes.slider} ${classes.round}`}></span>
          </label>
        </div>
      </div>
      <div className={classes.container}>
      <div className={classes.text}>
          {text3}
          </div>
        <div className={classes.right}>
          <label className={classes.switch}>
            <input
              type="checkbox"
              checked={isCheck3}
              onChange={switchChange3}
            />
            <span className={`${classes.slider} ${classes.round}`}></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default NotAllThreeAtOnce;

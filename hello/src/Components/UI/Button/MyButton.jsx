import React from "react";
import classes from "./MyButton.module.css";
function MyButton(props){
  return(
    <button className={classes.mybtn}>
      {props.text}
    </button>
  )
}
export default MyButton;
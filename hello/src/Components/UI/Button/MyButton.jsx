import React from "react";
import classes from "./MyButton.module.css";
function MyButton( ... props){
  return(
    <button className={classes.mybtn}>
      {props.text} hello
    </button>
  )
}
export default MyButton;
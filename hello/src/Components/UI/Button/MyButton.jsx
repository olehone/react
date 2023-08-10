import React from "react";
import classes from "./MyButton.module.css";
function MyButton(chilgren, ... props){
  return(
    <button className={classes.mybtn} {...props}>
      {chilgren}
    </button>
  )
}
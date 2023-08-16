import React from "react";
import classes from "./MyInput.module.css";
function MyInput(props){
  console.log("myinput", props)
  return(
    <input className={classes.input} {...props} />
  )
}
export default MyInput;
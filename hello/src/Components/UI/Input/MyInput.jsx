import React from "react";
import classes from "./MyInput.module.css";
function MyInput(... props){
  return(
    <input className={classes.myinp} {...props} />
    
  
  )
}
export default MyInput;
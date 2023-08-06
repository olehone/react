import React, { useState } from "react";
import Comment from "./Comment";
function CheckComentsExists({comments}){
  // comments.map((comment)=><Comment />);
}
function Comments({comments}) {
  var htmlString = "";
  // const [text, setText] = useState({comments});
  console.log({comments});
  if({comments}.length!==0)
  {
    console.log({comments}.length);
    htmlString = ' <div className="Comments"><h6>Comments</h6><strong></strong></div>';
  }
  return (
    <div>
    {comments.map((comment)=> <Comment comment = {comment} key = {comment.id}/>)}
    </div>
  );
}
export default Comments;

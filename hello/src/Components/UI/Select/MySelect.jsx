import React from "react";
import classes from "./MySelect.module.css";
function MySelect({ defaultTitle, options, value, onChange }) {
  return (
    <select value = {value} onChange={ e=> onChange(e.target.value)}>
      <option disabled value="">
        {defaultTitle}
      </option>
      {options.map((option) => (
        <option key = {option.value} value={option.value}>{option.name}</option>
      ))}
    </select>
  );
}
export default MySelect;

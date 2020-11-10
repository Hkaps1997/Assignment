import React from "react";
const menuItem = (props) => (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.changeHandler}
    />
);

export default menuItem;

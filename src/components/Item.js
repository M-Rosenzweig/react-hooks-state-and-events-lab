import React, { useState } from "react";

function Item({ name, category }) {
  // we want the Classname to start in default of "" and when it is clicked to set the new state to in-cart

  const [classToggle, setClassToggle] = useState(true);
  const [toggleText, setToggleText] = useState(true);

  // let toggle = classToggle ? "" : "in-cart";
  let text = toggleText ? "Add To Cart" : "Remove From Cart";

  function handleClassToggle() {
    setClassToggle((classToggle) => !classToggle);
    setToggleText((toggleText) => !toggleText);
  }

  return (
    <li className={classToggle ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClassToggle} className="add">
        {text}
      </button>
    </li>
  );
}

export default Item;

import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedOption, setSelectedOption] = useState("All");

  function handleCatagoryChange(event) {
    setSelectedOption((selectedOption) => event.target.value);
  }



  const itemsToDisplay = items.filter((item) => {
    // how does this if statement work. return true ie dont filter at all?
    if (selectedOption === "All") return true;
    return item.category === selectedOption;
    // how does item.category work. Im assuming send the whole object that matches this comparison but in simple thinking it seems to say just return the catagory and not the whole object. 
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCatagoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDark, setIsDark] = useState(false);

  // for a toggle situation
  // we create the default state in const 
  // then make a new variable that will change dependant on the status of the first state with a ternery and it is this changing variable that we use in the jsx/ html for the conditional rendering. 
  // then on the click we have a function handle the default variable to !opposit boolean to change its status which will in effect change the second variable we created 


  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light";

  function handleClick() {
    setIsDark((isDark) => !isDark);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{appClass}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

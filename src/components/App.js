import React  from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkmode, setIsDarkMode] = (true)
  
  const appClass  = isDarkmode ? "App dark" : "App light"
  
  function handleDarkMode () {
    setIsDarkMode((isDarkmode => !isDarkmode))
  }


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

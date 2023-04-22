import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const[selectedCategory, setSelectedCategory] = ("All");

  function handleCategoryChange (event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => selectedCategory === "All" || item.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

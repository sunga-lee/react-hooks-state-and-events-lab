import React from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = (false)

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  const itemClass =isInCart ? "in-cart" : "" 
  const buttonClass = isInCart ? "remove" : "add"

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;

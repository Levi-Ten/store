import { Key, Trash } from "phosphor-react";
import React, { useEffect, useState } from "react";
import "./basketTemplate.css";

function BasketTemplate({
  id,
  image,
  title,
  price,
  quantity,
  number,
  priceSumm,
}) {
  const getProducts = JSON.parse(localStorage.getItem("cart"));

  const [count, setCount] = useState(getProducts);
  const num = quantity + 1;
  const nuDecrease = quantity - 1;

  function addProduct(id) {
    setCount((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: num, priceSumm: price * num }
          : item
      )
    );
    window.location.reload(true);
  }

  function decreseProduct(id) {
    if (quantity > 1) {
      setCount((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, quantity: nuDecrease, priceSumm: price * nuDecrease }
            : item
        )
      );
      window.location.reload(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(count));
  }, [count]);

  const removeProduct = (id) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(
        JSON.parse(localStorage.getItem("cart") ?? "[]").filter(
          (item) => item.id !== id
        )
      )
    );
    window.location.reload(false);
  };

  return (
    <div className="basket__block">
      <div className="basket__block-image">
        <img src={image} alt={title} />
      </div>
      <div className="basket__block-info">
        <p className="info__title">{title}</p>
        <p className="info__price">
          {priceSumm}
          <span>$</span>
        </p>
        <p className="info__quantity">{quantity}</p>
        <div>
          <button
            className="info__btn"
            onClick={() => addProduct(id)}
            title="add to cart"
          >
            +
          </button>
          <button
            className="info__btn"
            title="remove from cart"
            onClick={() => decreseProduct(id)}
          >
            -
          </button>
        </div>
        <div className="delete__block">
          <button
            className="delete__block-btn"
            onClick={() => removeProduct(id)}
          >
            <Trash size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketTemplate;

import React from "react";
import BasketTemplate from "../../components/templates/basket/BasketTemplate";
import "./basket.css";
import { useState } from "react";

function Anything() {
  return (
    <div className="anything">
      <div className="anything__image">
        <p>Your cart is empty</p>
      </div>
    </div>
  );
}

function Basket() {
  const getProducts = JSON.parse(localStorage.getItem("cart"));
  // console.log(getProducts);

  let getResult;
  if (getProducts) {
    getResult = getProducts.map((e, i) => {
      return (
        <BasketTemplate
          key={i}
          number ={i}
          id={e.id}
          image={e.image}
          title={e.title}
          price={e.price}
          quantity={e.quantity}
          priceSumm={e.priceSumm}
        />
      );
    });
  }
  // total price
  const totalPrice = getProducts?.reduce((acc, curentValue) => {
    return acc + curentValue.price * curentValue.quantity;
  }, 0);

  const arrEmpty =
    getProducts === null
      ? Anything()
      : getProducts.length < 1
      ? Anything()
      : "";

  const [clearCart, setClearCart] = useState(arrEmpty);

  const removeProducts = () => {
    localStorage.clear();
    setClearCart(<Anything />);
  };

  return (
    <div className="basket">
      <div className="info__block">
        <button className="info__block-btn" onClick={removeProducts}>
          clear
        </button>
        <div>
          <p>
            <span>total: </span>
            {totalPrice ?? 0}
            <span>$</span>
          </p>
        </div>
      </div>
      {clearCart || getResult}
    </div>
  );
}

export default Basket;

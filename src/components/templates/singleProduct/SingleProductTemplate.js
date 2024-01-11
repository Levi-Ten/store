import React from "react";
import "./singleProductTemplate.css";

// localStorage.clear()

export default function SingleProductTemplate({
  title,
  image,
  category,
  price,
  id,
  rating,
  priceSumm
}) {
  // https://www.youtube.com/watch?v=u3rylF3y3og&ab_channel=TraversyMedia
  //https://codepen.io/bradtraversy/pen/GQLRZv
  // rating
  const starsTotal = 5;
  // get rating in percentage
  const starsPercentage = (rating / starsTotal) * 100;

  // round
  // const starRounded = Math.round(starsPercentage);
  // rating end

  // add to basket
  // 1 etapa ↓ adaugarea in array
  // 2 etapa ↓ rezolvarea inlocuirii in array
  // 3 etapa ↓ some() in caz ca produsul exista nu-l mai adaugam
  const addProduct = () => {
    let products = JSON.parse(localStorage.getItem("cart") || "[]");

    let countryExist = products.some((obj) => obj.title === title);

    if (!countryExist) {
      products.push({
        id: id,
        title: title,
        image: image,
        price: price,
        // last add
        quantity: 1,
        priceSumm: price
      });

      localStorage.setItem("cart", JSON.stringify(products));
    }
  };

  return (
    <div className="single__product">
      <h2>{title}</h2>
      <div className="single__product-img">
        <img src={image} alt={category} />
      </div>
      <div className="stars-block">
        <div>
          <div className="stars-outer" style={{ width: starsPercentage }}></div>
          <div className="stars-inner" style={{ width: starsPercentage }}></div>
        </div>
        <p>{rating}</p>
      </div>
      <div className="detail">
        <p>
          {price} <span>$</span>
        </p>
        <button title="add to basket" onClick={() => addProduct(id)}>
          add
        </button>
      </div>
    </div>
  );
}

// adaugarea in array mai multor obiecte cu produse
// nu este bine ca se inlocuieste cu cel existent
// ****** 1 etapa ↑ ******

// const addProduct = () => {
//   let products = [];
//   products.push({
//     id: id,
//     title: title,
//     image: image,
//     price: price,
//   });
//   console.log(products);

// salvarea in localStorage

// localStorage.setItem("cart", JSON.stringify(products))
// };

// ****** 2 etapa ↑ ******
// modificarea scriptului pentru a adauga la existent nu de a inlocui

// const addProduct = () => {

//   // let products = []; inlocuim let products cu ↓
//   let products = JSON.parse(localStorage.getItem("cart") || "[]");

//   products.push({
//     id: id,
//     title: title,
//     image: image,
//     price: price,
//   });
//   console.log(products);
//   localStorage.setItem("cart", JSON.stringify(products))
// };

// ****** 3 etapa ↑ ******

// const addProduct = () => {
//   let products = JSON.parse(localStorage.getItem("cart") || "[]");

//   let countryExist = products.some((obj) => obj.title === title);

//   if (!countryExist) {
//   products.push({
//     id: id,
//     title: title,
//     image: image,
//     price: price,
//   });

//   localStorage.setItem("cart", JSON.stringify(products))
// }
// };

// some()
// Metoda .somere turnează un boolean (adevărat/fals)

// Metoda .sometestează fiecare element al matricei în funcție de condiție. De îndată ce un element îndeplinește condiția, .somemetoda returnează TRUE fără a verifica elementele rămase. Nu ne spune câte elemente îndeplinesc condiția (unul? unele? multe? toate?) și nu ne spune ce element(e) ne satisface condiția

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductTemplate from "../templates/singleProduct/SingleProductTemplate";

const urlApi = "https://fakestoreapi.com/products";

function SingleProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(urlApi).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const { category } = useParams();

  const product = products
    .filter((e) => e.category === category)
    .map((e, i) => {
      return (
        <SingleProductTemplate
          key={i}
          title={e.title}
          image={e.image}
          category={e.category}
          price={e.price}
          id={e.id}
          rating={e.rating.rate}
        />
      );
    });
  console.log(products);

  return (
    <>
      <div>{category}</div>
      <div className="products">{product}</div>
    </>
  );
}

export default SingleProduct;

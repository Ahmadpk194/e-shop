import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">${price}</p>
        <div className="product__rating">
          {new Array(rating).fill().map((i) => (
            <p>⭐</p>
          ))}
        </div>
      </div>

      <img src={image} alt="product-img" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

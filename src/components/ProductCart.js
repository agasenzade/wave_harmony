import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import Button from "./Button";
import "./ProductCart.css";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";

export const ProductCard = ({
  id,
  productImage,
  name,
  price,
  model,
  size,
  onClick,
}) => {
  return (
    <Link to={`/products/${id}`} className="product-card-wrapper">
      <div className="product-card">
        <div className="img-container">
          <img src={`http://localhost:5000/${productImage}`} alt="product" />
          <div className="img-icon">
            <BsIcons.BsHeart />
          </div>
        </div>
        <div className="content">
          <p className="product-name">{name}</p>
          <p className="product-price">{price}$</p>
          <p className="product-model">{model}</p>

          <p className="product-size">{size}</p>
          <div className="product-card-buy">
            <Button text="Buy" variant="filled" onClick={onClick} />
          </div>
        </div>
      </div>
    </Link>
  );
};

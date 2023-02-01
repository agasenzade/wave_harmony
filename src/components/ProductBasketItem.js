import "./ProductBasketItem.css";
import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { DeleteCart } from "../assets/delete";

export const ProductBasketItem = ({
  id,
  productImage,
  productName,
  price,
  quantity,
}) => {
  const { deleteFromCart } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(quantity);

  const onDecrementClick = () => {
    if (productQuantity > 1) {
      setProductQuantity((prevCount) => prevCount - 1);
    }
  };
  const onIncrementClick = () => {
    if (productQuantity < 10) {
      setProductQuantity((prevCount) => prevCount + 1);
    }
  };
  return (
    <>
      <tr>
        <div className="product-basket-item-all">
          <td className="product-basket-item-img">
            <img src={`http://localhost:5000/${productImage}`} alt="product" />
          </td>
          <div className="product-basket-item-desc">
            <td className="product-basket-item-desc-name">{productName}</td>
            <td className="product-basket-item-desc-size">Size:S - 42/44</td>
            <td className="product-basket-item-desc-price">{price}$</td>
            <div className="product-item-buttons">
              <td>
                <button
                  className="increment"
                  onClick={onDecrementClick}
                  variant="filled"
                >
                  -
                </button>
                <span className="total">{productQuantity}</span>
                <button
                  className="decrement"
                  onClick={onIncrementClick}
                  variant="filled"
                >
                  +
                </button>
              </td>
              <button className="delet-btn" onClick={() => deleteFromCart(id)}>
                <DeleteCart />
              </button>
            </div>
          </div>
        </div>
      </tr>
    </>
  );
};

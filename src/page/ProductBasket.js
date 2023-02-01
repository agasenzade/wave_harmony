import React, { useContext, useState } from "react";
import { ProductBasketItem } from "../components/ProductBasketItem";
import "./ProductBasket.css";
import { CartContext } from "../CartContext";

const ProductBasket = () => {
  const { cart } = useContext(CartContext);

  const getTotalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const [toggle, setToggle] = useState(false);

  console.log(cart);
  return (
    <div className="product-basket-container">
      <div className="product-basket-head">
        <h3>Your order</h3>
      </div>
      <div className="product-basket-table">
        <div className="product-basket-left">
          {cart.map((item) => (
            <ProductBasketItem
              key={item.id}
              id={item.id}
              productName={item.name}
              productImage={item.productImage}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="product-basket-right-container">
          <div className="product-basket-right">
            <div className="basket-right-title">
              <h3>Total payable</h3>
            </div>
            <div className="basket-right-sum">
              <h5>Goods worth</h5>
              <p>{getTotalPrice}$</p>
            </div>
            <button>Confirm the order</button>
            <div className="basket-right-card-subs">
              <p>
                By clicking the "Subscribe" button, you consent to the
                processing of personal data
              </p>
            </div>
          </div>
          <div className="basket-right-promo">
            {toggle ? (
              <input type="text" placeholder="I have a promo code" />
            ) : (
              <button onClick={() => setToggle(true)}>
                I have a promo code
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBasket;

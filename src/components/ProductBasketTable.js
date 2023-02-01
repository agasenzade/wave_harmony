import React from "react";
import { useContext } from "react";
import ProductBasket from "../page/ProductBasket";
import { ProductBasketItem } from "./ProductBasketItem";

export const ProductBasketTable = () => {
  const { productBasket } = useContext(ProductBasket);
  return (
    <div>
      {productBasket.map(({ productImage, id, name, price }) => (
        <ProductBasketItem
          key={id}
          id={id}
          productName={name}
          productImage={productImage}
          price={price}
        />
      ))}
    </div>
  );
};

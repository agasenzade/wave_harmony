import { createContext, useState } from "react";
import { ProductCard } from "./components/ProductCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])


  const addToCart = (product) => {
    setCart((prev) => [
      ...prev,
      { ...product, quantity: 1 },
    ]);
  };
  

  const deleteFromCart = (id) => {
    const deleteFromArr = cart.filter((product) => product.id !== id);
    setCart(deleteFromArr);
  };

  return (
    <CartContext.Provider value={{ addToCart, cart, deleteFromCart }}>{children}</CartContext.Provider>
  );
};

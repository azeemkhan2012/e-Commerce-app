import React, { createContext, useContext, useState } from "react";

const CartContex = createContext();

export const useCart = () => useContext(CartContex);

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  

  const values = {
    cartItem,
    setCartItem,
  };
  return <CartContex.Provider value={values}>{children}</CartContex.Provider>;
};

export default CartProvider;

import React, { createContext, useState } from "react";

//Creamos el contexto
const StoreContext = createContext();

//Provider
const StoreProvider = ({ children }) => {
  const list = [
    {
      id: 1,
      name: "Producto 1",
      price: 250
    },
    {
      id: 2,
      name: "Producto 2",
      price: 550
    },
    {
      id: 3,
      name: "Producto 3",
      price: 100
    },
    {
      id: 4,
      name: "Producto 4",
      price: 320
    }
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  //Funciones
  const handleAddToCart = item => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  const handleRemoveToCart = product => {
    setCart(cart.filter(item => item.id !== product.id));
    setTotal(total - product.price);
  };

  const data = {
    cart,
    total,
    list,
    handleAddToCart,
    handleRemoveToCart
  };

  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export default StoreContext;
export { StoreProvider };

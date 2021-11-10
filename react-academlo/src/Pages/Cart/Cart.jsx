import React, { useContext } from "react";

//Context
import StoreContext from "../../Context/StoreContext";

const Cart = () => {
  const { cart, handleRemoveToCart } = useContext(StoreContext);

  return (
    <div>
      <h3 className="mt-10">Carrito de compras</h3>
      {cart.map(item => (
        <div key={item.id} className="mt-10">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button onClick={() => handleRemoveToCart(item)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

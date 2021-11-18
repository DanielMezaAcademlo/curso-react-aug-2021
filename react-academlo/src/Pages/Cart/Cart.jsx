import React, { useContext } from "react";

//Context
import StoreContext from "../../Context/StoreContext";

const Cart = () => {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <div>
      <h3 className="mt-10">Carrito de compras</h3>
      {state?.cart?.map(item => (
        <div key={item.id} className="mt-10">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item })
            }
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

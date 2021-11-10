import React, { useContext } from "react";

//Context
import StoreContext from "../../Context/StoreContext";

const Store = () => {
  const { cart, total, list, handleAddToCart } = useContext(StoreContext);

  return (
    <div>
      <h2>Ejemplo E-commerce</h2>

      {list.map(item => (
        <div key={item.id} className="mt-10">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button onClick={() => handleAddToCart(item)}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default Store;

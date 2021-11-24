import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Actions
import { handleAddProductsAction } from "../../redux/actions/shop.action";

const Store = () => {
  //Redux hooks
  const { products } = useSelector(store => store.shop);
  const dispatch = useDispatch();
  // { type: "ADD_TO_CART", payload: { price: item } }
  return (
    <div>
      <h2>Ejemplo E-commerce</h2>

      {products?.map(item => (
        <div key={item.id} className="mt-10">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button onClick={() => dispatch(handleAddProductsAction(item))}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default Store;

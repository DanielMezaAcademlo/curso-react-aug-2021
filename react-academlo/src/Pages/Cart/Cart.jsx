import React from "react";
import { useSelector, useDispatch } from "react-redux";
//Actions
import { handleDeleteProductsAction } from "../../redux/actions/shop.action";

//Context

const Cart = () => {
  const { cart } = useSelector(store => store.shop);
  const dispatch = useDispatch();
  // { type: "REMOVE_FROM_CART", payload: item }
  return (
    <div>
      <h3 className="mt-10">Carrito de compras</h3>
      {cart?.map(item => (
        <div key={item.id} className="mt-10">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button onClick={() => dispatch(handleDeleteProductsAction(item))}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

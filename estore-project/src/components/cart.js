import { UseSelector, useDispatch, useSelector } from "react-redux";
import CartItem from "./cartItem";
import { clearCart } from "../shared/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  
  const clearCartItem = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div>
      <h1 className="flex justify-center font-bold text-3xl">Cart Item </h1>
      <button className="bg-green-100" onClick={() => clearCartItem()}>
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <CartItem key={item.card.info.id} {...item.card.info} />
        ))}
      </div>
    </div>
  );
};

export default Cart;

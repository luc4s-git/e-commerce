import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart;
  });

  const { cartItems } = cart;

  const handleRemove = (cartID) => {
    dispatch(removeItem(cartID));
  };

  return (
    <div>
      {cartItems.map((item) => {
        return (
          <button
            key={item.productId}
            className="mt-2 link link-primary link-hover text-sm"
            onClick={() => handleRemove(item.cartID)}
          >
            remove
          </button>
        );
      })}
    </div>
  );
}

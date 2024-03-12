import { redirect } from 'react-router-dom';
import { instance, formatPrice } from '../../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../../features/cart/cartSlice';

export const action =
  (store) =>
  async ({ request }) => {
    const data = Object.fromEntries(await request.formData());

    const { name, address } = data;
    const { user } = store.getState().user;
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await instance.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      store.dispatch(clearCart());
      toast.success('Order placed successfully.');
      return redirect('/orders');
    } catch (error) {
      const errorMassage =
        error?.response?.data?.error?.message ||
        'There was an error placing your order. Please try again.';
      toast.error(errorMassage);

      if (error.response.status === 401) return redirect('/login');

      return null;
    }
  };

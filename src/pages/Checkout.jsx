import { CheckoutForm, SectionTitle, CartTotals } from '../components';
import { useSelector } from 'react-redux';

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart);

  if (cartItems.cartTotal === 0) {
    return <SectionTitle title="Your cart is empty"></SectionTitle>;
  }

  return (
    <>
      <SectionTitle title="place your order"></SectionTitle>
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm cartItems={cartItems}></CheckoutForm>
        <CartTotals></CartTotals>
      </div>
    </>
  );
}

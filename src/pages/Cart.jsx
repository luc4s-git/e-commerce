import { useSelector } from 'react-redux';
import { SectionTitle, CartItemsList, CartTotals } from '../components';
import { Link } from 'react-router-dom';

export default function Cart() {
  const user = null;
  const { numItemsInCart } = useSelector((state) => state.cart);

  if (numItemsInCart === 0) {
    return <SectionTitle title={'Your cart is empty'}></SectionTitle>;
  }

  return (
    <>
      <SectionTitle title={'Shopping Cart'}></SectionTitle>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList></CartItemsList>
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals></CartTotals>
          {user ? (
            <Link
              to={'/checkout'}
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link
              to={'/login'}
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

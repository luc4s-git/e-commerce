import { useDispatch } from 'react-redux';
import { removeItem, editItem } from '../features/cart/cartSlice';
import { generateAmountOptions, formatPrice } from '../utils';

export default function CartItem({
  cartID,
  title,
  price,
  image,
  amount,
  company,
  productColor,
}) {
  const dispatch = useDispatch();

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  const handleRemove = () => {
    dispatch(removeItem(cartID));
  };

  return (
    <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
      <img
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
        src={image}
        alt={title}
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>

        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12 sm:flex sm:flex-col sm:items-center">
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={(e) => handleAmount(e)}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        <button
          className="mt-2 link link-primary link-hover text-xs"
          onClick={handleRemove}
        >
          remove
        </button>
      </div>
      {
        <p className="font-medium sm:ml-auto">
          {formatPrice(price)} x {amount}
        </p>
      }
    </article>
  );
}

import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

export default function SingleProduct() {
  const dispatch = useDispatch();

  const response = useLoaderData();
  const { data } = response;
  const { image, title, company, price, description, colors } =
    data.data.attributes;

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const cartProduct = {
    cartID: data.data.id + productColor,
    productId: data.data.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };

  const handleAmount = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleColor = (item) => {
    setProductColor(item);
  };

  const handleButton = () => {
    dispatch(addItem(cartProduct));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link>Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{formatPrice(price)}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color, index) => {
                return (
                  <button
                    key={index}
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    onClick={() => handleColor(color)}
                    style={{ backgroundColor: color }}
                    type="button"
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label htmlFor="amount" className="label">
              <h4 className="text-md font-medium -tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              name="amount"
              id="amount"
              className="select select-secondary select-bordered select-md"
              onChange={handleAmount}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
            </select>
          </div>
          <div className="mt-10">
            <button
              className="btn btn-secondary btn-md uppercase"
              onClick={handleButton}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

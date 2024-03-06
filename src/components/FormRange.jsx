import { useState } from 'react';
import { formatPrice } from '../utils';

export default function FormRange({ label, name, size }) {
  const [priceRange, setPriceRange] = useState(100000);

  const handleChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <div className="form-control">
      <label className="label cursor-pointer" htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(priceRange)}</span>
      </label>
      <input
        className={`range range-primary ${size}`}
        name={name}
        id={name}
        type="range"
        min={0}
        max={100000}
        step={1000}
        value={priceRange}
        onChange={handleChange}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md capitalize">
          max: {formatPrice(100000)}
        </span>
      </div>
    </div>
  );
}

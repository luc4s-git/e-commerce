import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';

import { BsFillGridFill, BsList } from 'react-icons/bs';

export default function ProductsContainer() {
  const [layout, setLayout] = useState('grid');
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const setActiveStyle = (location) => {
    if (location === 'gridBtn' && layout === 'grid')
      return 'text-xl btn btn-circle btn-sm btn-primary text-primary-content';
    if (location === 'listBtn' && layout === 'list')
      return 'text-xl btn btn-circle btn-sm btn-primary text-primary-content';
    return 'text-xl btn btn-circle btn-sm btn-ghost text-based-content';
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">{`${totalProducts} products`}</h4>
        <div className="flex gap-x-2">
          <button
            className={setActiveStyle('gridBtn')}
            type="btn"
            onClick={() => setLayout('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            className={setActiveStyle('listBtn')}
            type="btn"
            onClick={() => setLayout('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
}

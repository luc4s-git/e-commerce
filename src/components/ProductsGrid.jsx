import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

export default function ProductsGrid() {
  const products = useLoaderData();

  const productsMapping = products.map((item) => {
    const { id } = item;
    const { price, image, title } = item.attributes;

    return (
      <Link
        key={id}
        to={'#'}
        className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
      >
        <figure className="px-4 pt-4">
          <img
            src={image}
            alt={title}
            className="rounded-t-xl object-cover w-full h-64 md:h-48"
          />
        </figure>
        <div className="card-body text-center items-center">
          <h2 className="card-title capitalize tracking-wider">{title}</h2>
          <span className="text-secondary">{formatPrice(price)}</span>
        </div>
      </Link>
    );
  });

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {productsMapping}
    </div>
  );
}

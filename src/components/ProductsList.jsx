import { formatPrice } from '../utils';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

export default function ProductsList() {
  const { products } = useLoaderData();

  const productsMapping = products.map((product) => {
    return (
      <Link
        key={product.id}
        to={`/products/${product.id}`}
        className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
      >
        <img
          className="h-24 w-24 rounded-lg sm:w-32 sm:h-32 object-cover group-hover:scale-105 transition duration-300"
          src={product.attributes.image}
          alt={product.attributes.title}
        />
        <div className="ml-0 sm:ml-16">
          <h3 className="capitalize font-medium text-lg">
            {product.attributes.title}
          </h3>
          <h4 className="capitalize text-md text-neutral-content">
            {product.attributes.company}
          </h4>
        </div>
        <p className="font-medium ml-0 sm:ml-auto text-lg">
          {formatPrice(product.attributes.price)}
        </p>
      </Link>
    );
  });

  return <div className="mt-12 grid gap-y-8">{productsMapping}</div>;
}

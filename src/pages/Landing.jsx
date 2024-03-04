import Hero from '../components/Hero';

import { useLoaderData } from 'react-router-dom';
import { instance } from '../utils';

const url = '/products?featured=true';

export const loader = async () => {
  const response = await instance(url);
  const products = response.data.data;
  return products;
};

export default function Landing() {
  const products = useLoaderData();
  console.log(products);

  return (
    <>
      <Hero />
    </>
  );
}

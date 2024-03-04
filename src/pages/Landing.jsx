import Hero from '../components/Hero';
import { FeaturedProducts } from '../components';

import { useLoaderData } from 'react-router-dom';

export default function Landing() {
  const products = useLoaderData();

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

import Hero from '../components/Hero';

import { useLoaderData } from 'react-router-dom';

export default function Landing() {
  const products = useLoaderData();
  console.log(products);

  return (
    <>
      <Hero />
    </>
  );
}

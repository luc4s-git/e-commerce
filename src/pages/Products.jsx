import { Filters, PaginationContainer, ProductsContainer } from '../components';

export default function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

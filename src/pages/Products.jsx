import {
  Filters,
  PaginationContainer,
  ProductsContainer,
  ProductsList,
} from '../components';

export default function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
      <ProductsList />
    </>
  );
}

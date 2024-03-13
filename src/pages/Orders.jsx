import { useLoaderData } from 'react-router-dom';
import {
  SectionTitle,
  OrdersList,
  ComplexPaginationContainer,
} from '../components';

export default function Orders() {
  const { orders, meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle title="please make an order" />;
  }

  return (
    <>
      <SectionTitle title="your orders" />
      <OrdersList orders={orders} />
      <ComplexPaginationContainer />
    </>
  );
}

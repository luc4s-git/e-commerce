import { useLoaderData } from 'react-router-dom';
import { SectionTitle } from '../components';
import { OrderList } from '../components';

export default function Orders() {
  const { orders } = useLoaderData();

  return (
    <>
      <SectionTitle title="your orders" />
      <div className="mt-8">
        <h4 className="mb-4 capitalize">total orders: {orders.length}</h4>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* order heading */}
            <thead>
              <tr>
                <th className="capitalize">Name</th>
                <th className="capitalize">Address</th>
                <th className="capitalize">Products</th>
                <th className="capitalize">Cost</th>
                <th className="hidden sm:block">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => (
                <OrderList key={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

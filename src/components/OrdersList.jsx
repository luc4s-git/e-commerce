import { useLoaderData } from 'react-router-dom';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

export default function OrdersList() {
  const { orders, meta } = useLoaderData();

  const tableHeadings = ['name', 'address', 'products', 'cost', 'date'];

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">total orders: {meta.pagination.total}</h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              {tableHeadings.map((title, index) => {
                return (
                  <th
                    key={index}
                    className={`capitalize ${
                      title === 'date' && 'hidden sm:block'
                    }`}
                  >
                    {title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => {
              const id = item.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                item.attributes;

              const date = dayjs(createdAt).format('hh:mm a - MMM Do, YYYY');

              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td>{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

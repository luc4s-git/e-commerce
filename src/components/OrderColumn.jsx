import { formatDate } from '../utils';

export default function OrderColumn({ item }) {
  const { name, address, numItemsInCart, orderTotal, publishedAt } =
    item.attributes;

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{address}</td>
        <td>{numItemsInCart}</td>
        <td>{orderTotal}</td>
        <td>{formatDate(publishedAt)}</td>
      </tr>
    </>
  );
}

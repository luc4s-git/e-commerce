import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://strapi-store-server.onrender.com/api',
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));

  return dollarsAmount;
};

export function generateAmountOptions(amount) {
  const arrForMap = [];

  for (let x = 1; x <= amount; x++) {
    arrForMap.push(x);
  }

  return arrForMap.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
}

import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://strapi-store-server.onrender.com/api',
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format((price / 100).toFixed(2));

  return dollarsAmount;
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(newDate);

  return formattedDate;
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

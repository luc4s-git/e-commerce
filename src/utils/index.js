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
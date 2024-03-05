import { instance } from '../../utils';

const url = '/products';

export const loader = async () => {
  const response = await instance(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

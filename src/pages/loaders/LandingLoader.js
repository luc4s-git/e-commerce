import { instance } from '../../utils';

const url = '/products?featured=true';

export const loader = (queryClient) => async () => {
  const response = await instance(url);
  const products = response.data.data;
  return { products };
};

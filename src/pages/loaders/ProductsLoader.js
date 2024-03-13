import { instance } from '../../utils';

const url = '/products';

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await instance(url, { params });

    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta };
  };

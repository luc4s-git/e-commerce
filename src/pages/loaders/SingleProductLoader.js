import { instance } from '../../utils';

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await instance(`/products/${params.id}`);
    return response;
  };

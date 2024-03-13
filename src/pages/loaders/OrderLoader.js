import { instance } from '../../utils';
import { toast } from 'react-toastify';

const url = '/orders';

export const loader = (store) => async () => {
  try {
    const { token } = store.getState().user.user;
    const response = await instance.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { data: response.data.data, meta: response.data.meta };
  } catch (error) {
    const errorMassage =
      error?.response?.data?.error?.message ||
      'There was an error placing your order. Please try again.';
    toast.error(errorMassage);
    return null;
  }
};

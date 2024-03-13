import { instance } from '../../utils';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

const url = '/orders';

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().user.user;

    if (!user) {
      toast.warn('You must be logged in to view orders.');
      return redirect('/login');
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await instance.get(url, {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);

      const errorMassage =
        error?.response?.data?.error?.message ||
        'There was an error placing your order. Please try again.';

      toast.error(errorMassage);

      if (error.response.status === 401 || error.response.status === 403)
        return redirect('/login');

      return null;
    }
  };

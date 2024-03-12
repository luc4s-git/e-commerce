import { instance } from '../../utils';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

// slice
import { loginUser } from '../../features/user/userSlice';

const url = '/auth/local';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await instance.post(url, data);
      store.dispatch(loginUser(response.data));
      toast.success('Logged in successfully');
      return redirect('/');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'Please double check your credentials';
      toast.error(errorMessage);
      return null;
    }
  };

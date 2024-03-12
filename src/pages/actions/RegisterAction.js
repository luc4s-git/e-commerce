import { instance } from '../../utils';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

const url = '/auth/local/register';

export const action = async ({ request }) => {
  console.log(request);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await instance.post(url, data);
    toast.success('Your account was created!');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message || 'Please check your credentials';

    toast.error(errorMessage);
    return null;
  }
};

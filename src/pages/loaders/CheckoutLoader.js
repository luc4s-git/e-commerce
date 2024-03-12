import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = (store) => () => {
  const user = store.getState().user.user;

  if (!user) {
    toast.warn('You must be logged to access this page.');
    return redirect('/login');
  }

  return null;
};

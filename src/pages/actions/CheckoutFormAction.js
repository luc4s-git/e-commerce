import { redirect } from 'react-router-dom';

export const action =
  (store) =>
  async ({ request }) => {
    console.log(store.getState());
    return redirect('/orders');
  };

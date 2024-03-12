import { FormInput, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';

import { useNavigate } from 'react-router-dom';
import { instance } from '../utils';
import { toast } from 'react-toastify';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await instance.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('Logged as Guest');

      // redirect is used in actions and loaders
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Guest user login error. Please retry');
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        className="card w-96 p-8 bg-base-100 flex flex-col gap-y-4"
        method="post"
        action="/login"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput name="identifier" label="Email" type="email" />
        <FormInput name="password" label="Password" type="password" />
        <div className="mt-4">
          <SubmitBtn type="submit" text="LOGIN" />
        </div>
        <button
          className="btn btn-secondary btn-block"
          type="button"
          onClick={loginAsGuestUser}
        >
          GUEST USER
        </button>
        <p className="text-center">
          Not a member yet?
          <Link to="/register" className="ml-1 link link-hover link-primary">
            Register now
          </Link>
        </p>
      </Form>
    </section>
  );
}

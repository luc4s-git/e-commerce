import { FormInput, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';

export default function Login() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        className="card w-96 p-8 bg-base-100 flex flex-col gap-y-4"
        method="post"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          name="identifier"
          label="Email"
          type="email"
          defaultValue="test@test.com"
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          defaultValue="admin"
        />
        <div className="mt-4">
          <SubmitBtn type="submit" text="LOGIN" />
        </div>
        <button className="btn btn-secondary btn-block" type="button">
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

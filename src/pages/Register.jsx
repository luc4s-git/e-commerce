import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';

export default function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        action="/register"
      >
        <h4 className="text-center text-3xl font-bold capitalize">register</h4>
        <FormInput
          label="username"
          name="username"
          type="text"
          defaultValue={'test320'}
        />
        <FormInput
          label="email"
          name="email"
          type="email"
          defaultValue={'test320@email.com'}
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          defaultValue={'secret'}
        />
        <div className="mt-4">
          <SubmitBtn text="REGISTER" />
        </div>
        <p className="text-center">
          Already a member?{' '}
          <Link
            to={'/login'}
            className="link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
}

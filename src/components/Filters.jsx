import { Form, Link, useLoaderData } from 'react-router-dom';

import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

export default function Filters() {
  const { meta } = useLoaderData();

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />
      {/* CATEGORIES */}
      <FormSelect
        name="category"
        label="select category"
        list={meta.categories}
        size="select-sm"
      />
      {/* COMPANIES */}
      <FormSelect
        name="company"
        label="select company"
        list={meta.companies}
        size="select-sm"
      />
      {/* ORDER */}
      <FormSelect
        name="order"
        label="sort by"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
      />
      {/* RANGE */}
      <FormRange label="select price" name="price" size="range-sm" />
      {/* CHECKBOX INPUT */}
      <FormCheckbox name="shipping" label="free shipping" size='checkbox-sm' />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm ">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
}

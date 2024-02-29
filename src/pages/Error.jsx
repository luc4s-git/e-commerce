import { Link, useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    console.log(error);

    return (
      <main className="grid place-items-center min-h-[100vh]">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">{error.status}</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            {error.statusText}
          </h1>
          <p className="mt-6 text-lg leading-6">
            {"Sorry, we weren't able to find the page you are looking for."}
          </p>
          <div className="mt-10">
            <Link to={'/'} className="btn btn-secondary capitalize">
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  console.log(error);
  return (
    <main className="grid min-h-[100vh] place-items-center">
      Sorry, there was an error.
    </main>
  );
}

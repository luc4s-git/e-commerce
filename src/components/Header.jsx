import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-screen bg-neutral py-2 text-neutral-content">
      <div className="align-center flex justify-center sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
          <Link
            className="link link-hover text-xs sm:text-sm capitalize"
            to="/login"
          >
            sign in / guest
          </Link>
          <Link
            className="link link-hover text-xs sm:text-sm capitalize"
            to="/register"
          >
            create account
          </Link>
        </div>
      </div>
    </header>
  );
}

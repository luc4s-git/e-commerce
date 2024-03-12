import { useNavigate, Link } from 'react-router-dom';

// LOGOUT
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';
import { clearCart } from '../features/cart/cartSlice';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    navigate('/');
    dispatch(logoutUser());
    dispatch(clearCart());
  };

  return (
    <header className="w-screen bg-neutral py-2 text-neutral-content">
      <div className="align-center flex justify-center sm:justify-end">
        <div className="flex gap-x-2 sm:gap-x-8 justify-center items-center">
          {user ? (
            <>
              <p className="text-xs sm:text-sm">Hello, {user.username}</p>
              <button className="btn btn-xs uppercase" onClick={handleLogout}>
                logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </header>
  );
}

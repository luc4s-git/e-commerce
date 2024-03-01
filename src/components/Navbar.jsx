import { NavLink } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { BsSunFill, BsMoonFill, BsCart3 } from 'react-icons/bs';

export default function Navbar() {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-center">
        <div className="navbar-start">
          <NavLink className="hidden lg:flex btn btn-primary text-3xl items-center">
            C
          </NavLink>
          <div className="dropdown">
            <label className="btn btn-ghost lg:hidden" tabIndex={0}>
              <FaBarsStaggered className="text-2xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink to={'/products'}>Products</NavLink>
              </li>
              <li>
                <NavLink to={'/cart'}>Cart</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <li>
              <NavLink to={'/'} className="capitalize">
                home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/about'} className="capitalize">
                about
              </NavLink>
            </li>
            <li>
              <NavLink to={'/products'} className="capitalize">
                products
              </NavLink>
            </li>
            <li>
              <NavLink to={'/cart'} className="capitalize">
                cart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" />
            <BsMoonFill className="swap-off fill-current w-4 h-4" />
            <BsSunFill className="swap-on fill-current w-4 h-4" />
          </label>
          <NavLink
            className="btn btn-ghost btn-circle btn-md ml-4"
            to={'/cart'}
          >
            <div className="indicator">
              <BsCart3 className="text-2xl" />
              <span className="badge badge-sm badge-primary indicator-item">
                0
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

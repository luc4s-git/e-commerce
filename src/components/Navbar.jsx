import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { BsSunFill, BsMoonFill, BsCart3 } from 'react-icons/bs';
import NavLinks from './NavLinks';

const getThemeFromLocal = () => {
  return localStorage.getItem('theme') || 'winter';
};

export default function Navbar() {
  const [theme, setTheme] = useState(getThemeFromLocal());

  const handleTheme = () => {
    const newTheme = theme === 'winter' ? 'dracula' : 'winter';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const links = [
    { id: 'XKIkqx2QbcAg3vPRvrvMe', url: '/', text: 'home' },
    { id: 'MgRj1az7WfBIEdh1DXiR_', url: 'about', text: 'about' },
    { id: 'vPseL60bl-1nYlYK7CccS', url: 'products', text: 'products' },
    { id: '8F4O80ap0xhMPPoi1Atlt', url: 'cart', text: 'cart' },
  ];

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
              <NavLinks links={links} />
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
            <input type="checkbox" onChange={handleTheme} />

            {theme === 'dracula' ? (
              <>
                <BsMoonFill className={'swap-on fill-current w-4 h-4'} />
                <BsSunFill className={'swap-off fill-current w-4 h-4'} />
              </>
            ) : (
              <>
                <BsMoonFill className={'swap-off fill-current w-4 h-4'} />
                <BsSunFill className={'swap-on fill-current w-4 h-4'} />
              </>
            )}
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

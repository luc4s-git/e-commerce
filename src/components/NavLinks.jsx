import { NavLink } from 'react-router-dom';

// USER DATA from STATE
import { useSelector } from 'react-redux';

export default function NavLinks() {
  const links = [
    { id: 'XKIkqx2QbcAg3vPRvrvMe', url: '/', text: 'home' },
    { id: 'MgRj1az7WfBIEdh1DXiR_', url: 'about', text: 'about' },
    { id: 'vPseL60bl-1nYlYK7CccS', url: 'products', text: 'products' },
    { id: '8F4O80ap0xhMPPoi1Atlt', url: 'cart', text: 'cart' },
    { id: 'kO9TrduikQCOPnvIR9uc1', url: 'checkout', text: 'checkout' },
    { id: 'tiNkVtI7YrYSslrLvurF8', url: 'orders', text: 'orders' },
  ];

  const user = useSelector((state) => state.user.user);

  const navLinksMapping = links.map((item) => {
    const { id, url, text } = item;
    if (!user && (url === 'checkout' || url === 'orders')) return;
    return (
      <li key={id}>
        <NavLink to={url} className={'capitalize'}>
          {text}
        </NavLink>
      </li>
    );
  });

  return <>{navLinksMapping}</>;
}

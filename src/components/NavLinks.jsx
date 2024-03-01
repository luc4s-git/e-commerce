import { NavLink } from 'react-router-dom';

export default function NavLinks({ links }) {
  const navLinksMapping = links.map((item) => {
    const { id, url, text } = item;
    return (
      <NavLink key={id} to={url} className="capitalize">
        {text}
      </NavLink>
    );
  });

  return <li>{navLinksMapping}</li>;
}

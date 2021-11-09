import React from 'react';

import './styles/navbar.css';
const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Donate',
    path: '/donate',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

function Navbar() {
  const [active, setActive] = React.useState(false);
  return (
    <nav className="navbar">
      <span>HFC</span>

      <ul className={`navbarNav ${active && 'active'}`}>
        {navLinks.map((links, index) => (
          <NavItem
            key={index}
            something={links.title}
            title={links.title}
            path={links.path}
          />
        ))}
      </ul>
      <div className="hamburgerIcon" onClick={() => setActive(!active)}></div>
    </nav>
  );
}
function NavItem({ title, path, something }) {
  return (
    <li className={`navItem ${something}`}>
      <a href={path}>{title}</a>
    </li>
  );
}

export default Navbar;

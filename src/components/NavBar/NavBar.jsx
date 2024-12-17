import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import './NavBar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/estates", name: "Estates" },
    { id: 4, path: "/estates/:id", name: "Estate Details" },
    { id: 5, path: "/login", name: "Login" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-menu" onClick={toggleMenu}>
        <TiThMenu className="menu-icon" />
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        {routes.map(route => (
          <li key={route.id} className="navbar-item">
            <NavLink 
              className="navbar-link" 
              to={route.path}
              activeClassName="active-link"
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

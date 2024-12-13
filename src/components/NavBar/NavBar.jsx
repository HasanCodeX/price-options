import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" }, 
    { id: 2, path: "/about", name: "About" }, 
    { id: 3, path: "/estates", name: "Estates" }, 
    { id: 4, path: "/estates/:id", name: "Estate Details" }, 
    { id: 5, path: "/login", name: "Login" }
  ];

  return (
    <nav>
      {routes.map(route => (
        <NavLink key={route.id} to={route.path}>
          {route.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;

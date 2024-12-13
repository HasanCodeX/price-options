const Link = () => {
    return (
        <div>
            <ul>
                {routes.map(route => (
                    <li key={route.id}>
                        <NavLink to={route.path} end={route.path === "/"}>
                            {route.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Link;
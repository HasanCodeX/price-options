
import PropTypes from 'prop-types';


const Link = ({ routes }) => {
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

//link proptypes



Link.propTypes = {
    routes: PropTypes.object 
};

export default Link;
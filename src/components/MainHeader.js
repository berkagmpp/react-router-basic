import { NavLink } from "react-router-dom";

import classes from './MainHeader.module.css'

const MainHeader = () => {
    return <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink className={(navigationData) => navigationData.isActive ? classes.active : null} 
                             to="/welcome">
                        WELCOME
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navigationData) => navigationData.isActive ? classes.active : null} 
                             to="/products">
                        PRODUCTS
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
};

export default MainHeader;
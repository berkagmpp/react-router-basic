import { Link } from "react-router-dom";

const MainHeader = () => {
    return <header>
        <nav>
            <ul>
                <li>
                    <Link to="/welcome">WELCOME</Link>
                </li>
                <li>
                    <Link to="/products">PRODUCTS</Link>
                </li>
            </ul>
        </nav>
    </header>
};

export default MainHeader;
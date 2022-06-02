import { Link } from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>The Products Page!</h1>
            <ul>
                <li>
                    <Link to="/products/p1">
                        Whittakers Cocoa 92% Ghana 100g
                    </Link>
                </li>
                <li>
                    <Link to="/products/p2">
                        Spam Lite 340g
                    </Link>
                </li>
                <li>
                    <Link to="/products/p3">
                        Haagen Lager 330ml 12Pk Btl
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default Products;
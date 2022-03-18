import { Link } from "react-router-dom";

function Header({ heading, className }) {
    const linkAddress = heading.replace(" ", "").toLowerCase();

    return (
        <Link to={`/${linkAddress}`} className={`nav-link ${className}`}>
            {heading}
        </Link>
    );
}

export default Header;

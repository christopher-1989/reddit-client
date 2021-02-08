import "./Header.css";

export const MobileMenu = (props) => {

    return (
        <ul className={props.click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <a href="/" className="nav-links" onClick={props.closeMobileMenu}>
                    SubR#1
                </a>
            </li>
            <li className="nav-item">
                <a href="/" className="nav-links" onClick={props.closeMobileMenu}>
                    SubR#2
                </a>
            </li>
            <li className="nav-item">
                <a href="/blog" className="nav-links" onClick={props.closeMobileMenu}>
                    SubR#3
                </a>
            </li>
        </ul>
    )
}


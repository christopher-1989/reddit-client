import "./Header.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header-container">
            <h1>myReddit</h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <a href="/" className="nav-links" onClick={closeMobileMenu}>
                            SubR#1
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-links" onClick={closeMobileMenu}>
                            SubR#2
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/blog" className="nav-links" onClick={closeMobileMenu}>
                            SubR#3
                        </a>
                    </li>
                </ul>
        </div>
    )
}
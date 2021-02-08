import "./Header.css";
import { useState } from 'react';
import { MobileMenu } from "./MobileMenu";
import { BrowserMenu } from "./BrowserMenu";

export const Header = () => {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);

    const handleClick = () => setClick(!click);

    const width = window.screen.width;

    return (
        <div className="header-container">
            <h1 className="title">myReddit<span className="browser" >    <i className='fab fa-reddit' /></span></h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : "fas fa-bars"} />
            </div>
            <MobileMenu className="mobileMenu" click={click} onClick={closeMobileMenu}/>
            <BrowserMenu className="browserMenu" />
        </div>
    )
}
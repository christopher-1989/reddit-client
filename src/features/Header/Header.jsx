import "./Header.css";
import { MobileMenu } from "./MobileMenu";
import { useSelector, useDispatch } from 'react-redux';
import { menuClick } from '../../store/actions/actions';

export const Header = () => {
    // const width = window.screen.width;

    const clicked = useSelector(state => state.menuClicked)
    const dispatch = useDispatch();

    return (
        <div data-test="headerComponent" className="header-container">
            <h1 className="title">myReddit<span className="browser" >    <i className='fab fa-reddit' /></span></h1>
            <div className="menu-icon" onClick={() => dispatch(menuClick(clicked))}>
                <i className={clicked ? 'fas fa-times' : "fas fa-bars"} />
            </div>
            <MobileMenu data-test="mobileMenu" className="mobileMenu" click={clicked} onClick={() => dispatch(menuClick(clicked))}/>
            
        </div>
    )
}
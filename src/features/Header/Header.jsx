import "./Header.css";
import { MobileMenu } from "./MobileMenu";
import { useSelector, useDispatch } from 'react-redux';
import { getPageTitle, menuClick } from '../../store/actions/actions';
import { store } from '../../store/index';
import { fetchPosts } from "../../store/actions";

export const Header = () => {
    // const width = window.screen.width;
    const homePage = '/r/ASX_bets/';
    const clicked = useSelector(state => state.menuClicked);
    const dispatch = useDispatch();

    const pageTitle = useSelector(state => state.getPageTitle)

    function fetch () {
        if (!clicked) {
            store.dispatch(getPageTitle(homePage))
            store.dispatch(fetchPosts(`${homePage}.json`));
        }
    }

    return (
        <div data-test="headerComponent" className="header-container">
            <div className="title-container" >
                <h1 className="title" onClick={fetch}>{pageTitle}<span className="browser" > Viewer lite <i className='fab fa-reddit-alien' /></span></h1>
                <div className="menu-icon" onClick={() => dispatch(menuClick(clicked))}>
                    <i className={clicked ? 'fas fa-times' : "fas fa-bars"} />
                </div>
            </div>
            
            <MobileMenu data-test="mobileMenu" className="mobileMenu" click={clicked} onClick={() => dispatch(menuClick(clicked))}/>
            
        </div>
    )
}
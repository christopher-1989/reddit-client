import "./Header.css";
import { MobileMenu } from "./MobileMenu";
import { useSelector, useDispatch } from 'react-redux';
import { menuClick } from '../../store/actions/actions';
import { store } from '../../store/index';
import { fetchPosts } from "../../store/actions";

export const Header = () => {
    // const width = window.screen.width;

    const clicked = useSelector(state => state.menuClicked)
    const dispatch = useDispatch();

    function fetch () {
        store.dispatch(fetchPosts('/r/ASX_bets.json'))
    }

    return (
        <div data-test="headerComponent" className="header-container" onClick={fetch}>
            <div className="title-container" >
                <h1 className="title">myReddit<span className="browser" >    <i className='fab fa-reddit-alien' /></span></h1>
                <div className="menu-icon" onClick={() => dispatch(menuClick(clicked))}>
                    <i className={clicked ? 'fas fa-times' : "fas fa-bars"} />
                </div>
            </div>
            
            <MobileMenu data-test="mobileMenu" className="mobileMenu" click={clicked} onClick={() => dispatch(menuClick(clicked))}/>
            
        </div>
    )
}
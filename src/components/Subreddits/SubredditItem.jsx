import './SubredditItem.css';
import PropTypes from 'prop-types';
import { store } from '../../store/index';
import { fetchPosts } from '../../store/actions';
import { getPageTitle } from '../../store/actions/actions';
import { useSelector } from 'react-redux';

const SubredditItem = (props) => {

    const clicked = useSelector(state => state.menuClicked);
    const { subredditTitle, url } = props;

    if (!subredditTitle) {
        return null;
    }

    function fetch (endpoint) {
        store.dispatch(getPageTitle(url))
        store.dispatch(fetchPosts(`${url}.json`))
    }
    
    return (
        <div data-test="subredditComponent" className="subreddit-title-container" onClick={fetch} >
            <h4 data-test="subredditTitle" className={clicked ? "nav-subreddit-title" : "subreddit-title" }>{subredditTitle}</h4>
        </div>
    )
}

SubredditItem.propTypes = {
    subredditTitle: PropTypes.string
}

export default SubredditItem;
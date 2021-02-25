import './SubredditItem.css';
import PropTypes from 'prop-types';
import { store } from '../../store/index';
import { fetchPosts } from '../../store/actions';

const SubredditItem = (props) => {

    const { subredditTitle, url } = props;

    if (!subredditTitle) {
        return null;
    }

    function fetch (endpoint) {
        store.dispatch(fetchPosts(`${url}.json`))
    }
    
    return (
        <div data-test="subredditComponent" className="subreddit-title-container"onClick={fetch} >
            <h4 data-test="subredditTitle" className="subreddit-title" >{subredditTitle}</h4>
        </div>
    )
}

SubredditItem.propTypes = {
    subredditTitle: PropTypes.string
}

export default SubredditItem;
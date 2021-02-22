import './SubredditItem.css';
import PropTypes from 'prop-types';

const SubredditItem = (props) => {

    const { subredditTitle } = props;

    if (!subredditTitle) {
        return null;
    }
    return (
        <div data-test="subredditComponent">
            <h4 data-test="subredditTitle" className="subreddit-title">{subredditTitle}</h4>
        </div>
    )
}

SubredditItem.propTypes = {
    subredditTitle: PropTypes.string
}

export default SubredditItem;
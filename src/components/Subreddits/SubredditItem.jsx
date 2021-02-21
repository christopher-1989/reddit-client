import './SubredditItem.css';
import PropTypes from 'prop-types';

const SubredditItem = (props) => {

    const { subredditTitle } = props;

    if (!subredditTitle) {
        return null;
    }
    return (
        <div data-test="subredditComponent">
            <h2 data-test="subredditTitle">{subredditTitle}</h2>
        </div>
    )
}

SubredditItem.propTypes = {
    subredditTitle: PropTypes.string
}

export default SubredditItem;
import "./Card.css";
import PropTypes from 'prop-types';

const Card = (props) => {

    const { title, author, score, selftext } = props;

    if(!title) {
        return null;
    }

    return (
        <div data-test="cardComponent">
            <h3 data-test="componentTitle">{title}</h3>
            <p data-test="componentPost">{author} Score: {score}</p>
            {selftext}
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    post: PropTypes.string
}


export default Card;
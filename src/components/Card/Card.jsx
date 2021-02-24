import "./Card.css";
import PropTypes from 'prop-types';

const Card = (props) => {

    const { title, author, score, selftext, url } = props;

    if(!title) {
        return null;
    }

    return (
        <div data-test="cardComponent">
            <h3 data-test="componentTitle">{title}</h3>
            {selftext && 
            selftext}
            {url && 
            <img alt={title} src={url} />}
            <p data-test="componentPost">{author} Score: {score}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    post: PropTypes.string
}


export default Card;
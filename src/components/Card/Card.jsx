import "./Card.css";
import PropTypes from 'prop-types';

const Card = (props) => {

    const { title, author, score, selftext, url } = props;

    if(!title) {
        return null;
    }

    return (
        <div data-test="cardComponent" className="card-component">
            <h3 data-test="componentTitle" className="card-title">{title}</h3>
            {selftext && 
            <p className="text-body">{selftext}</p>}
            {url && 
            <img alt={title} src={url} className="image" />}
            <p data-test="componentPost">{author} Score: {score}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    post: PropTypes.string
}


export default Card;
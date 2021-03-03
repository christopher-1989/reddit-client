import "./Card.css";
import PropTypes from 'prop-types';

const Card = (props) => {

    const { title, author, score, selftext, url, media } = props;

    if(!title) {
        return null;
    }

    let embed;

    switch (url[8]) {
        case 'i':
            embed = <img alt={title} src={url} className="image" />;
            break;
        case 'v':
            // eslint-disable-next-line jsx-a11y/iframe-has-title
            embed = <iframe className="video" width="560" height="315" src={media.reddit_video.fallback_url} frameborder="0" autoplay allowfullscreen></iframe>;
            break;
        default:
            embed = null;

    }

    return (
        <div data-test="cardComponent" className="card-component">
            <h3 data-test="componentTitle" className="card-title">{title}</h3>
            {selftext && 
            <p className="text-body">{selftext}</p>}
            {url && 
            embed}
            <p data-test="componentPost">Author: {author}. Score: {score}.</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    post: PropTypes.string
}


export default Card;
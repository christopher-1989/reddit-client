import "./Card.css";
import PropTypes from 'prop-types';

const Card = (props) => {

    const { title, post } = props;



    return (
        <div data-test="cardComponent">
            <h2 data-test="componentTitle">{title}</h2>
            <p data-test="componentPost">{post}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    post: PropTypes.string
}


export default Card;
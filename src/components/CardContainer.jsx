import Card  from "./Card/Card";
import "./CardContainer.css";
import { useSelector } from 'react-redux';
import SubredditItem from "./Subreddits/SubredditItem";

export const CardContainer = () => {

    const posts = useSelector(state => state.getPosts)

    return (
        <div data-test="cardContainerComponent" className="card-container-component">
            <div data-test="subredditConatiner" className="subreddit-container" >
                <h4>Empty container</h4>
                <ul>
                    <li className="subreddit-row">
                        Subreddit #1
                    </li>
                    <li className="subreddit-row">
                        Subreddit #2
                    </li>
                    <li className="subreddit-row">
                        Subreddit #3
                    </li>
                </ul>
                <SubredditItem />
            </div>
            {posts.length > 0 &&
                <div data-test="cardsContainer" className="cards-container">
                {posts.map((post, index) => {
                    const { title, body } = post;
                    const configCard = {
                    title,
                    post: body
                    };
                    return (
                    <Card key={index} {...configCard}/>
                    )
                })}
                </div>
            }
        </div>
    )
}
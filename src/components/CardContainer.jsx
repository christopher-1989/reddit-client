import Card  from "./Card/Card";
import "./CardContainer.css";
import { useSelector, connect } from 'react-redux';
import SubredditItem from "./Subreddits/SubredditItem";
import { fetchSubredditTitles } from '../store/actions'; 


function CardContainer (props) {
    const posts = useSelector(state => state.getPosts)

    const subreddits = useSelector(state => state.getSubredditTitles)
 
    console.log(subreddits);


    return (
        <div data-test="cardContainerComponent" className="card-container-component">
            <div data-test="subredditConatiner" className="subreddit-container" >
                {subreddits.map((sub, index) => {
                        const configSubreddit = {
                            subredditTitle: sub.data.display_name_prefixed
                        };

                        return (
                            <SubredditItem key={index} {...configSubreddit} />
                        );
                    })
                }
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

const mapStateToProps = state => {
    return {
      redditPosts: state.redditPosts
    }
  }

export default connect(mapStateToProps, {fetchSubredditTitles})(CardContainer);
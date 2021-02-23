import Card  from "./Card/Card";
import "./CardContainer.css";
import { useSelector, connect } from 'react-redux';
import SubredditItem from "./Subreddits/SubredditItem";
import { fetchRedditPosts } from '../store/actions'; 


function CardContainer (props) {
    const posts = useSelector(state => state.getPosts)
    const testSubs = ["Subreddit #1", "Subreddit #2", "Subreddit #3"];

    const subreddits = useSelector(state => state.getRedditPosts)

    let subredditTitles;
    if(subreddits.length > 0) {
        subredditTitles = subreddits.map((sub, index) => {

            return sub.data.display_name_prefixed;
        });
    };  

  
    console.log(subredditTitles);


    return (
        <div data-test="cardContainerComponent" className="card-container-component">
            <div data-test="subredditConatiner" className="subreddit-container" >
                {testSubs.map((sub, index) => {

                    const configSubreddit = {
                        subredditTitle: sub
                    }
                    return (
                    <SubredditItem key={index} {...configSubreddit} />
                    )
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

export default connect(mapStateToProps, {fetchRedditPosts})(CardContainer);
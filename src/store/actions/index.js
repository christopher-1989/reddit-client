import { types } from './types';
import axios from 'axios';

// export const fetchPosts = () => async (dispatch) => {
//     await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
//     .then(res => {
//         dispatch({
//             type: types.GET_POSTS,
//             payload: res.data
//         })
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

const REDDIT_ENDPOINT = "https://www.reddit.com";

export const fetchPosts = () => async (dispatch) => {
    await axios.get(`${REDDIT_ENDPOINT}/r/Home.json`)
    .then(res => {
        dispatch({
            type: types.GET_POSTS,
            payload: res.data.data.children
        })
    })
    .catch(err => {
        console.log(err);
    });
}




export const fetchSubredditTitles = () => async (dispatch) => {
    await axios.get(`${REDDIT_ENDPOINT}/subreddits.json`)
    .then(res => {
        dispatch({
            type: types.GET_SUBREDDIT_TITLES,
            payload: res.data.data.children
        })
    })
    .catch(err => {
        console.log(err)
    })
}

import { types } from './types';
import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
    await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(res => {
        dispatch({
            type: types.GET_POSTS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err);
    });
}

const REDDIT_ENDPOINT = "https://www.reddit.com";

export const fetchRedditPosts = () => async (dispatch) => {
    await axios.get(`${REDDIT_ENDPOINT}/subreddits/default.json`)
    .then(res => {
        dispatch({
            type: types.GET_REDDIT,
            payload: res.data
        })
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

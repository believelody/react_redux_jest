import axios from 'axios'
import {GET_POSTS} from '../reducers/post/postReducer'

export const fetchPosts = () => async dispatch => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    console.log(res.data)
    dispatch({ type: GET_POSTS, payload: {posts: res.data} })
  }
  catch (e) {
    console.log(e)
  }
}

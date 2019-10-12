export const GET_POSTS = 'GET_POSTS'

const postInitState = {
  posts: []
}

export default (state = postInitState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload.posts
      }
    default:
      return state
  }
}

import { GET_POSTS } from './postReducer'
import postReducer from './postReducer'

describe('Posts Reducer', () => {
  it('Should return default state', () => {
    const newState = postReducer(undefined, {})
    expect(newState).toEqual({posts: []})
  })

  it('Should return new state if receiving type', () => {
    const posts = [
      {title: 'Test 1'},
      {title: 'Test 2'},
      {title: 'Test 3'},
    ]
    const newState = postReducer(undefined, {
      type: GET_POSTS,
      payload: { posts }
    })
    expect(newState).toEqual({posts})
  })
})

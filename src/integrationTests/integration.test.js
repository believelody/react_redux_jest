import moxios from 'moxios'
import { testStore } from '../utils'
import { fetchPosts } from '../actions/postAction'

describe('fetchPosts actions', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall
  })

  test('Store is updated correctly', () => {
    const expectedState = [
      {
        title: 'Example title 1',
        body: 'Some Text'
      },
      {
        title: 'Example title 2',
        body: 'Some Text'
      },
      {
        title: 'Example title 3',
        body: 'Some Text'
      },
      {
        title: 'Example title 4',
        body: 'Some Text'
      },
    ]

    const store = testStore()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({ status: 200, response: expectedState })
    })

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState()
      // console.log(newState)
      expect(newState.post.posts).toBe(expectedState)
    })
  })
})

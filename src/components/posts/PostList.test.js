import React from 'react'
import { shallow } from 'enzyme'
import PostList from './PostList'
import { findByTestAttr, testStore } from '../../utils'

const setUp = (initialState = {}) => {
  const store = testStore(initialState)
  const wrapper = shallow(<PostList store={store} />).childAt(0).dive()

  return wrapper
}

describe('PostList Component', () => {
  let component
  beforeEach(() => {
    const initialState = {
      post: {
        posts: [
          {
            title: 'Example title 1',
            body: 'Some text'
          },
          {
            title: 'Example title 2',
            body: 'Some text'
          },
          {
            title: 'Example title 3',
            body: 'Some text'
          },
        ]
      }
    }

    component = setUp(initialState)
  })

  it('Should render without errors', () => {
    const list = findByTestAttr(component, 'post-list-component')

    expect(list.length).toBe(1)
  })
})

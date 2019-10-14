import PostItem from './PostItem'
import { setUp, findByTestAttr, checkProps } from '../../utils'

describe('PostItem Component', () => {
  let component

  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning', () => {
      const expectedProps = {
        title: 'Title Example',
        desc: 'Some text'
      }
      const propsError = checkProps(PostItem, expectedProps)
      expect(propsError).toBeUndefined()
    })
  })

  describe('Component Renders', () => {
    beforeEach(() => {
      component = setUp({component: PostItem, title: 'Title Example', desc: 'Some text'})
    })

    it('Should renders without error', () => {
      const item = findByTestAttr(component, 'post-item')

      expect(item.length).toBe(1)
    })

    it('Should renders a title', () => {
      const title = findByTestAttr(component, 'post-title')

      expect(title.length).toBe(1)
    })

    it('Should renders a desc', () => {
      const desc = findByTestAttr(component, 'post-desc')

      expect(desc.length).toBe(1)
    })
  })

  describe('Should NOT render', () => {
    beforeEach(() => {
      component = setUp({component: PostItem, title: null, desc: 'Some text'})
    })

    it('Component is not rendered', () => {
      const item = findByTestAttr(component, 'post-item')

      expect(item.length).toBe(0)
    })
  })
})

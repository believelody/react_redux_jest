import SharedButton from './SharedButton'
import '../../setupTests'
import { findByTestAttr, setUp, checkProps } from '../../utils'

describe('SharedButton Component', () => {
  describe('Checking PropTypes', () => {
    it('Should NOT throw warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {}
      }

      const errorProps = checkProps(SharedButton, expectedProps)

      expect(errorProps).toBeUndefined()
    })
  })

  describe('Renders', () => {
    let component

    beforeEach(() => {
        component = setUp({component: SharedButton, buttonText: 'Get Posts', emitEvent: () => {}})
    })

    it('Should render a button', () => {
      const button = findByTestAttr(component, 'button-component')
      expect(button.length).toBe(1)
    })
  })
})

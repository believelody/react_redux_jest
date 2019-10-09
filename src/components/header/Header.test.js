import Header from './Header'
import '../../setupTests'
import { findByTestAttr, setUp } from '../../utils'

describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setUp({component: Header})
    })    
    
    it('Should render without errors', () => {
        const header = findByTestAttr(component, 'header-component')
        expect(header.length).toBe(1)
    })

    it('Should render wrap', () => {
        const wrap = component.find('.wrap')
        expect(wrap.length).toBe(1)
    })
})

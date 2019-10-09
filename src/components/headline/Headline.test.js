import Headline from './Headline'
import '../../setupTests'
import { findByTestAttr, setUp, checkProps } from '../../utils'

describe('Headline Component', () => {
    let component
    describe('Check PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test header',
                desc: 'Test desc',
                users: [
                    {
                        age: 22,
                        fName: 'Test fName',
                        lName: 'Test lName',
                        email: 'test@email.com',
                        onlineStatus: false
                    }
                ]
            }
            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })

    describe('Have props', () => {
        beforeEach(() => {
            component = setUp({component: Headline, header: 'Test header', desc: 'Test desc'})
        })
        
        it('Should render without errors', () => {
            const headlineWithProps = findByTestAttr(component, 'headline-component')
            expect(headlineWithProps.length).toBe(1)
        })

        it('Should render a H1', () => {
            const h1 = findByTestAttr(component, 'header')
            expect(h1.length).toBe(1)
        })

        it('Should render a desc', () => {
            const desc = findByTestAttr(component, 'desc')
            expect(desc.length).toBe(1)
        })
    })

    describe('Have NO props', () => {
        beforeEach(() => {
            component = setUp({component: Headline})
        })

        it('Should not render', () => {
            // console.log(component.debug())
            const headlineWithoutProps = findByTestAttr(component, 'headline-component')
            console.log(headlineWithoutProps.debug())
            expect(headlineWithoutProps.length).toBe(0)
        })
    })
    
})
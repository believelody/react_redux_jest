import React from 'react'
import { shallow } from 'enzyme'
import Headline from './Headline'
import '../../setupTests'
import { findByTestAttr, setUp } from '../../utils'

describe('Headline Component', () => {
    let component
    describe('Have props', () => {
        // beforeEach(() => {
        //     component = setUp({component: Headline, header: 'Test header', desc: 'Test desc'})
        // })
        
        // it('Should render without errors', () => {
        //     const headlineWithProps = findByTestAttr(component, 'headline-component')
        //     expect(headlineWithProps.length).toBe(1)
        // })

        // it('Should render a H1', () => {
        //     const h1 = findByTestAttr(component, 'header')
        //     expect(h1.length).toBe(1)
        // })

        // it('Should render a desc', () => {
        //     const desc = findByTestAttr(component, 'desc')
        //     expect(desc.length).toBe(1)
        // })
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
import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'
import '../../setupTests'
import { findByTestAttr } from '../../utils'

const setUp = (props = {}) => {
    return shallow(<Header {...props} />)
}

describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setUp()
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

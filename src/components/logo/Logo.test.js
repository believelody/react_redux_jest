import React from 'react'
import { shallow } from 'enzyme'
import Logo from './Logo'
import '../../setupTests'

describe('Logo Component', () => {
    it('Should render logo', () => {
        const component = shallow( <Logo /> )
        console.log(component.debug())
        const logo = component.find(`[data-test='logo-img']`)
        expect(logo.length).toBe(1)
    })
})
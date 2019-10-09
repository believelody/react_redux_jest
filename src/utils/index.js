import React from 'react'
import { shallow } from 'enzyme'

export const findByTestAttr = (component, attr) => component.find(`[data-test='${attr}']`)

export const setUp = ({component: Component, ...rest} = {}) => {
    return shallow(<Component {...rest} />)
}
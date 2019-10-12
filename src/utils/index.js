import React from 'react'
import checkPropTypes from 'check-prop-types'
import { shallow } from 'enzyme'

export const findByTestAttr = (component, attr) => component.find(`[data-test='${attr}']`)

export const setUp = ({component: Component, ...rest} = {}) => {
    return shallow(<Component {...rest} />)
}

export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
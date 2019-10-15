import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import checkPropTypes from 'check-prop-types'
import { shallow } from 'enzyme'
import rootReducer from '../reducers'
import { middlewares } from '../store'

export const findByTestAttr = (component, attr) => component.find(`[data-test='${attr}']`)

export const setUp = ({component: Component, ...rest} = {}) => {
    return shallow(<Component {...rest} />)
}

export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name)

export const testStore = (initialState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}

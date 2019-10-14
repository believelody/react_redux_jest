import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const SharedButton = ({ emitEvent, buttonText }) => {

  const handleClick = e => {
    if (emitEvent) {
      emitEvent()
    }
  }
  return (
    <button onClick={handleClick} data-test='button-component'>{buttonText}</button>
  )
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
}

export default SharedButton

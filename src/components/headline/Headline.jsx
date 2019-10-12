import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Headline extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { header, desc } = this.props
        return (
            header && desc && <section data-test='headline-component'>
                <h1 data-test='header'>{header ? header : null}</h1>
                <p data-test='desc'>{desc ? desc : null}</p>
            </section>
        )
    }
}

Headline.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string,
    users: PropTypes.arrayOf(PropTypes.shape({
      age: PropTypes.number,
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      onlineStatus: PropTypes.bool  
    })),
}

export default Headline

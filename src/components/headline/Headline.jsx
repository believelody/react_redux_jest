import React, { Component } from 'react'

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

export default Headline

import React from 'react'
import PropTypes from 'prop-types'

const PostItem = ({title, desc}) => {
    return (
        title &&
        <div data-test='post-item'>
          <h2 data-test='post-title'>{title}</h2>
          <p data-test='post-desc'>
            {desc}
          </p>
        </div>
    )
}

PostItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
}

export default PostItem

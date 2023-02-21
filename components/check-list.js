import React from 'react'

import PropTypes from 'prop-types'

const CheckList = (props) => {
  return (
    <div className={`check-list-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="check-list-icon">
        <path
          d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
          className=""
        ></path>
      </svg>
      <span className="Body1_bold">{props.text}</span>
    </div>
  )
}

CheckList.defaultProps = {
  rootClassName: '',
  text: 'Text',
}

CheckList.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default CheckList

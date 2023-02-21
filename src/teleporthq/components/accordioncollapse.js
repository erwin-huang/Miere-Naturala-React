import React from 'react'

import PropTypes from 'prop-types'

import './accordioncollapse.css'

const Accordioncollapse = (props) => {
  return (
    <div className={`accordioncollapse-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="accordioncollapse-icon">
        <path d="M426 726v-428l214 214z" className=""></path>
      </svg>
      <span className="Subtitle1.bold">{props.aTitle}</span>
    </div>
  )
}

Accordioncollapse.defaultProps = {
  rootClassName: '',
  aTitle: 'Text',
}

Accordioncollapse.propTypes = {
  rootClassName: PropTypes.string,
  aTitle: PropTypes.string,
}

export default Accordioncollapse

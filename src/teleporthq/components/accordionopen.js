import React from 'react'

import PropTypes from 'prop-types'

import './accordionopen.css'

const Accordionopen = (props) => {
  return (
    <div className={`accordionopen-container ${props.rootClassName} `}>
      <div className="accordionopen-title">
        <svg viewBox="0 0 1024 1024" className="accordionopen-icon">
          <path d="M298 426h428l-214 214z" className=""></path>
        </svg>
        <span className="Subtitle1.bold">{props.aTitle}</span>
      </div>
      <span className="accordionopen-accordiondescription Body1">
        {props.aDescription}
      </span>
    </div>
  )
}

Accordionopen.defaultProps = {
  aTitle: 'Text',
  rootClassName: '',
  aDescription: 'description',
}

Accordionopen.propTypes = {
  aTitle: PropTypes.string,
  rootClassName: PropTypes.string,
  aDescription: PropTypes.string,
}

export default Accordionopen

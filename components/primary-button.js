import React, { useState } from 'react'

import PropTypes from 'prop-types'

const PrimaryButton = (props) => {
  const [type, setType] = useState('primary')
  return (
    <div className={`primary-button-container ${props.rootClassName} `}>
      <button className="primary-button-button button">{props.button}</button>
    </div>
  )
}

PrimaryButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

PrimaryButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default PrimaryButton

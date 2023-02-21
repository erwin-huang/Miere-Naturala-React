import React from 'react'

import PropTypes from 'prop-types'

import './container.css'

const Container = (props) => {
  return <div className={`container-container ${props.rootClassName} `}></div>
}

Container.defaultProps = {
  rootClassName: '',
  text: 'Content',
}

Container.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Container

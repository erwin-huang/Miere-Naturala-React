import React from 'react'

import PropTypes from 'prop-types'

import PrimaryButton from './primary-button'

const NavbarLink = (props) => {
  return (
    <div className={`navbar-link-container ${props.rootClassName} `}>
      <span className="navbar-link-products Body1 navbar.link">
        {props.text}
      </span>
      <span className="navbar-link-contact navbar.link Body1">
        {props.contact}
      </span>
      <PrimaryButton
        button="Login"
        rootClassName="primary-button-root-class-name"
        className=""
      ></PrimaryButton>
      <PrimaryButton
        button="Register"
        rootClassName="primary-button-root-class-name1"
        className=""
      ></PrimaryButton>
    </div>
  )
}

NavbarLink.defaultProps = {
  text: 'Products',
  contact: 'Contact',
  rootClassName: '',
}

NavbarLink.propTypes = {
  text: PropTypes.string,
  contact: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavbarLink

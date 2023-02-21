import React from 'react'

import PropTypes from 'prop-types'

import './product-details.css'

const ProductDetails = (props) => {
  return (
    <div className={`product-details-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="product-details-image"
      />
      <span className="product-details-product-name Body1_bold">
        {props.heading1}
      </span>
      <span className="product-details-quantity Body2">{props.text}</span>
      <div className="product-details-container1"></div>
      <h1 className="product-details-price Subtitle2">{props.heading}</h1>
    </div>
  )
}

ProductDetails.defaultProps = {
  heading1: 'product name',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading: 'price Lei',
  rootClassName: '',
  text: 'quantity',
}

ProductDetails.propTypes = {
  heading1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default ProductDetails

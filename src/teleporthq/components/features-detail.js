import React from 'react'

import PropTypes from 'prop-types'

import './features-detail.css'

const FeaturesDetail = (props) => {
  return (
    <div className={`features-detail-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="features-detail-image"
      />
      <h1 className="features-detail-text Subtitle2.bold">{props.heading}</h1>
      <span className="features-detail-text1 Body2">{props.text}</span>
    </div>
  )
}

FeaturesDetail.defaultProps = {
  rootClassName: '',
  heading: 'Heading',
  image_alt: 'image',
  text: 'Text',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

FeaturesDetail.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeaturesDetail

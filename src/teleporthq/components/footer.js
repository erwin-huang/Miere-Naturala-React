import React from 'react'

import PropTypes from 'prop-types'

import CheckList from './check-list'
import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-footer">
      <div className="footer-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="footer-image"
        />
        <div className="footer-container1">
          <h1 className="footer-h1 Heading2">
            <span>
              Elevated quality against
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>hundred of diseases</span>
          </h1>
          <div className="footer-containermobile">
            <div>
              <CheckList
                text="Cardiovascular disease"
                rootClassName="check-list-root-class-name"
              ></CheckList>
              <CheckList
                text="Gastrointestinal disease"
                rootClassName="check-list-root-class-name15"
              ></CheckList>
              <CheckList
                text="Neurological disease"
                rootClassName="check-list-root-class-name1"
              ></CheckList>
              <CheckList
                text="Abscesses"
                rootClassName="check-list-root-class-name10"
              ></CheckList>
              <CheckList
                text="Inflammations"
                rootClassName="check-list-root-class-name7"
              ></CheckList>
              <CheckList
                text="Rigid joints"
                rootClassName="check-list-root-class-name4"
              ></CheckList>
              <CheckList
                text="Allergies"
                rootClassName="check-list-root-class-name5"
              ></CheckList>
              <CheckList
                text="Hay fever"
                rootClassName="check-list-root-class-name6"
              ></CheckList>
              <CheckList
                text="Acid reflux"
                rootClassName="check-list-root-class-name8"
              ></CheckList>
            </div>
            <div>
              <CheckList
                text="Blood sugar control"
                rootClassName="check-list-root-class-name11"
              ></CheckList>
              <CheckList
                text="Eye infections"
                rootClassName="check-list-root-class-name12"
              ></CheckList>
              <CheckList
                text="Diabetes"
                rootClassName="check-list-root-class-name13"
              ></CheckList>
              <CheckList
                text="Chronic fatigue syndrome"
                rootClassName="check-list-root-class-name16"
              ></CheckList>
              <CheckList
                text="Dental health"
                rootClassName="check-list-root-class-name18"
              ></CheckList>
              <CheckList
                text="Sore throat"
                rootClassName="check-list-root-class-name2"
              ></CheckList>
              <CheckList
                text="Indigestion"
                rootClassName="check-list-root-class-name3"
              ></CheckList>
              <CheckList
                text="Insomnia"
                rootClassName="check-list-root-class-name17"
              ></CheckList>
              <CheckList
                text="..and many more!"
                rootClassName="check-list-root-class-name9"
              ></CheckList>
            </div>
            <div className="footer-container4"></div>
          </div>
          <div className="footer-container5">
            <div>
              <CheckList
                text="Cardiovascular disease"
                rootClassName="check-list-root-class-name14"
              ></CheckList>
              <CheckList
                text="Gastrointestinal disease"
                rootClassName="check-list-root-class-name19"
              ></CheckList>
              <CheckList
                text="Neurological disease"
                rootClassName="check-list-root-class-name20"
              ></CheckList>
              <CheckList
                text="Abscesses"
                rootClassName="check-list-root-class-name21"
              ></CheckList>
              <CheckList
                text="Inflammations"
                rootClassName="check-list-root-class-name22"
              ></CheckList>
              <CheckList
                text="Rigid joints"
                rootClassName="check-list-root-class-name23"
              ></CheckList>
            </div>
            <div>
              <CheckList
                text="Blood sugar control"
                rootClassName="check-list-root-class-name24"
              ></CheckList>
              <CheckList
                text="Eye infections"
                rootClassName="check-list-root-class-name25"
              ></CheckList>
              <CheckList
                text="Diabetes"
                rootClassName="check-list-root-class-name26"
              ></CheckList>
              <CheckList
                text="Chronic fatigue syndrome"
                rootClassName="check-list-root-class-name27"
              ></CheckList>
              <CheckList
                text="Dental health"
                rootClassName="check-list-root-class-name28"
              ></CheckList>
              <CheckList
                text="Insomnia"
                rootClassName="check-list-root-class-name29"
              ></CheckList>
            </div>
            <div>
              <CheckList
                text="Sore throat"
                rootClassName="check-list-root-class-name30"
              ></CheckList>
              <CheckList
                text="Indigestion"
                rootClassName="check-list-root-class-name31"
              ></CheckList>
              <CheckList
                text="Allergies"
                rootClassName="check-list-root-class-name32"
              ></CheckList>
              <CheckList
                text="Hay fever"
                rootClassName="check-list-root-class-name33"
              ></CheckList>
              <CheckList
                text="Acid reflux"
                rootClassName="check-list-root-class-name34"
              ></CheckList>
              <CheckList
                text="..and many more!"
                rootClassName="check-list-root-class-name35"
              ></CheckList>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  image_src: '/playground_assets/pngegg [12] 1.png',
  image_alt: 'image',
}

Footer.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Footer

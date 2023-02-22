import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-footer">
      <div className="footer-main-footer">
        <div className="footer-container">
          <div className="footer-left">
            <img
              alt={props.logo}
              src={props.image_src}
              className="footer-image"
            />
            <div className="footer-infodetails">
              <div className="footer-container1">
                <svg viewBox="0 0 1024 1024" className="footer-icon">
                  <path d="M753.365 226.304c-133.291-131.115-349.397-131.115-482.688 0-133.291 131.157-133.291 343.765 0 474.88l241.323 237.44 241.365-237.44c133.291-131.115 133.291-343.723 0-474.88zM512 575.957c-28.501 0-55.253-11.093-75.435-31.232-41.6-41.6-41.6-109.269 0-150.869 20.139-20.139 46.933-31.232 75.435-31.232s55.296 11.093 75.435 31.232c41.6 41.6 41.6 109.312 0 150.869-20.139 20.139-46.933 31.232-75.435 31.232z"></path>
                </svg>
                <span className="footer-text Body1_bold">
                  {props.footerAddressTitle}
                </span>
              </div>
              <span className="footer-text01 Body1">
                {props.footerAddressOne}
              </span>
              <span className="footer-text02 Body1">
                {props.footerAddressTwo}
              </span>
            </div>
            <div className="footer-infodetails2 footer-infodetails2">
              <div className="footer-infodetails1">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="footer-icon02"
                >
                  <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                </svg>
                <span className="footer-text03 Body1_bold">
                  {props.footerPhone}
                </span>
              </div>
              <div>
                <svg viewBox="0 0 1024 1024" className="footer-icon04">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="footer-text04 Body1_bold">
                  {props.footerEmail}
                </span>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-quick-navigation">
              <span className="footer-quick-navigation1 Heading6">
                {props.footerNavigationTitle}
              </span>
              <div className="footer-quick-navigation-link">
                <span className="footer-text05 Subtitle2">
                  {props.footerLink1}
                </span>
                <span className="footer-text06 Subtitle2">
                  {props.footerLink2}
                </span>
                <span className="footer-text07 Subtitle2">
                  {props.footerLink3}
                </span>
                <span className="footer-text08 Subtitle2">
                  {props.footerLink}
                </span>
              </div>
            </div>
            <div className="footer-social-media">
              <span className="footer-social-media1 Heading6">
                {props.footerNavigationTitle1}
              </span>
              <div className="footer-quick-navigation-link1">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon06"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="footer-icon08">
                  <path d="M298.667 42.667c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v426.667c0 70.699 28.715 134.741 74.965 181.035s110.336 74.965 181.035 74.965h426.667c70.699 0 134.741-28.715 181.035-74.965s74.965-110.336 74.965-181.035v-426.667c0-70.699-28.715-134.741-74.965-181.035s-110.336-74.965-181.035-74.965zM298.667 128h426.667c47.147 0 89.728 19.072 120.661 50.005s50.005 73.515 50.005 120.661v426.667c0 47.147-19.072 89.728-50.005 120.661s-73.515 50.005-120.661 50.005h-426.667c-47.147 0-89.728-19.072-120.661-50.005s-50.005-73.515-50.005-120.661v-426.667c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM724.864 478.848c-6.4-41.472-24.363-79.232-50.944-109.525-32.171-36.736-76.971-62.507-128.384-70.144-19.797-3.157-41.387-3.285-63.019-0.085-58.283 8.619-107.563 40.149-140.032 83.925s-48.341 100.139-39.68 158.379 40.149 107.563 83.925 140.032 100.139 48.341 158.379 39.68 107.563-40.149 140.032-83.925 48.341-100.139 39.68-158.379zM640.469 491.392c5.205 34.987-4.267 68.651-23.808 95.019s-49.067 45.184-84.011 50.347-68.651-4.267-95.019-23.808-45.184-49.067-50.347-84.011 4.267-68.651 23.808-95.019 49.067-45.184 84.011-50.347c13.355-1.963 26.24-1.792 37.12-0.085 31.573 4.693 58.283 20.053 77.568 42.069 16 18.261 26.88 41.088 30.72 65.835zM789.333 277.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container2">
        <div className="footer-copyrights">
          <span className="footer-text09 Body1">{props.footerCopyright}</span>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  footerLink3: 'Contacts',
  footerAddressTitle: 'Miere Naturala',
  footerEmail: 'mierenaturala@gmail.com',
  footerAddressTwo: '220041, Romania',
  footerLink1: 'Home',
  logo: 'image',
  footerLink2: 'Products',
  footerAddressOne: 'Alee Privighetorilor nr. 1-T,6,Timisoara',
  footerCopyright:
    'Miere Naturala © All rights reserved - 2023 - Created and managed by PC DATA',
  footerNavigationTitle1: 'Our Social Media',
  footerNavigationTitle: 'Quick Navigation',
  footerLink: 'FAQ',
  footerPhone: '+40(234)217678 ',
  image_src: '/playground_assets/logo-honey.svg',
}

Footer.propTypes = {
  footerLink3: PropTypes.string,
  footerAddressTitle: PropTypes.string,
  footerEmail: PropTypes.string,
  footerAddressTwo: PropTypes.string,
  footerLink1: PropTypes.string,
  logo: PropTypes.string,
  footerLink2: PropTypes.string,
  footerAddressOne: PropTypes.string,
  footerCopyright: PropTypes.string,
  footerNavigationTitle1: PropTypes.string,
  footerNavigationTitle: PropTypes.string,
  footerLink: PropTypes.string,
  footerPhone: PropTypes.string,
  image_src: PropTypes.string,
}

export default Footer

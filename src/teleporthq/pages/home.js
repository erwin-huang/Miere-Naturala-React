import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FeaturesDetail from '../components/features-detail'
import ProductDetails from '../components/product-details'
import PrimaryButton from '../components/primary-button'
import CheckList from '../components/check-list'
import Accordionopen from '../components/accordionopen'
import Accordioncollapse from '../components/accordioncollapse'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Miere Naturala</title>
        <meta property="og:title" content="Miere Naturala" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="home-sectionhero">
        <div className="home-container01">
          <div className="home-container02">
            <h1 className="home-h1 LargeTitle">
              100% Organic Nature Premium Honey
            </h1>
            <span className="home-text Subtitle1">
              Discover the pure sweetness of our honey products. From jars of
              golden goodness to artisanal treats, we&apos;ve got everything to
              satisfy your honey cravings.
            </span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/honey drip.png"
        className="home-honeydrip"
      />
      <div className="home-sectionoverall-benefits">
        <div className="home-container03">
          <h1 className="home-h11 Heading2">
            Deliciously best grade homemade honey
          </h1>
          <div className="home-container04">
            <FeaturesDetail
              text="Taste the purity of 100% organic honey, free from harmful additives."
              heading="100% Organic"
              image_src="/playground_assets/frame 81.svg"
              rootClassName="features-detail-root-class-name"
            ></FeaturesDetail>
            <FeaturesDetail
              text="Our honey products undergo rigorous quality control for your peace of mind."
              heading="Quality Control"
              image_src="/playground_assets/frame 811.svg"
              rootClassName="features-detail-root-class-name1"
            ></FeaturesDetail>
            <FeaturesDetail
              text="Indulge in delicious honey products with a variety of flavors and textures to choose from."
              heading="Varied products"
              image_src="/playground_assets/frame 80.svg"
              rootClassName="features-detail-root-class-name2"
            ></FeaturesDetail>
            <FeaturesDetail
              text="Treat your loved ones to a unique gift of natural sweetness. Indulge in our artisanal honey treats today."
              heading="Perfect for gifts"
              image_src="/playground_assets/frame 81-2.svg"
              rootClassName="features-detail-root-class-name3"
            ></FeaturesDetail>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/honey.png"
          className="home-image"
        />
      </div>
      <div className="home-sectionour-products">
        <div className="home-container05">
          <h1 className="home-h12 Heading2">Our Products</h1>
          <div className="home-container06">
            <ProductDetails rootClassName="product-details-root-class-name16"></ProductDetails>
            <ProductDetails rootClassName="product-details-root-class-name17"></ProductDetails>
            <ProductDetails rootClassName="product-details-root-class-name18"></ProductDetails>
            <ProductDetails rootClassName="product-details-root-class-name19"></ProductDetails>
            <ProductDetails rootClassName="product-details-root-class-name20"></ProductDetails>
            <ProductDetails rootClassName="product-details-root-class-name21"></ProductDetails>
            <ProductDetails rootClassName="product-details-root-class-name22"></ProductDetails>
            <ProductDetails rootClassName="product-details-root-class-name23"></ProductDetails>
          </div>
          <PrimaryButton rootClassName="primary-button-root-class-name2"></PrimaryButton>
        </div>
        <img
          alt="image"
          src="/playground_assets/beehive1.png"
          className="home-image1"
        />
      </div>
      <div className="home-sectionhealth-benefit">
        <div className="home-container07">
          <img
            alt="image"
            src="/playground_assets/pngegg [12] 1.png"
            className="home-image2"
          />
          <div className="home-container08">
            <h1 className="home-h13 Heading2">
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
            <div className="home-containermobile">
              <div>
                <CheckList
                  text="Cardiovascular disease"
                  rootClassName="check-list-root-class-name36"
                ></CheckList>
                <CheckList
                  text="Gastrointestinal disease"
                  rootClassName="check-list-root-class-name37"
                ></CheckList>
                <CheckList
                  text="Neurological disease"
                  rootClassName="check-list-root-class-name38"
                ></CheckList>
                <CheckList
                  text="Abscesses"
                  rootClassName="check-list-root-class-name39"
                ></CheckList>
                <CheckList
                  text="Inflammations"
                  rootClassName="check-list-root-class-name40"
                ></CheckList>
                <CheckList
                  text="Rigid joints"
                  rootClassName="check-list-root-class-name41"
                ></CheckList>
                <CheckList
                  text="Allergies"
                  rootClassName="check-list-root-class-name42"
                ></CheckList>
                <CheckList
                  text="Hay fever"
                  rootClassName="check-list-root-class-name43"
                ></CheckList>
                <CheckList
                  text="Acid reflux"
                  rootClassName="check-list-root-class-name44"
                ></CheckList>
              </div>
              <div>
                <CheckList
                  text="Blood sugar control"
                  rootClassName="check-list-root-class-name45"
                ></CheckList>
                <CheckList
                  text="Eye infections"
                  rootClassName="check-list-root-class-name46"
                ></CheckList>
                <CheckList
                  text="Diabetes"
                  rootClassName="check-list-root-class-name47"
                ></CheckList>
                <CheckList
                  text="Chronic fatigue syndrome"
                  rootClassName="check-list-root-class-name48"
                ></CheckList>
                <CheckList
                  text="Dental health"
                  rootClassName="check-list-root-class-name49"
                ></CheckList>
                <CheckList
                  text="Sore throat"
                  rootClassName="check-list-root-class-name50"
                ></CheckList>
                <CheckList
                  text="Indigestion"
                  rootClassName="check-list-root-class-name51"
                ></CheckList>
                <CheckList
                  text="Insomnia"
                  rootClassName="check-list-root-class-name52"
                ></CheckList>
                <CheckList
                  text="..and many more!"
                  rootClassName="check-list-root-class-name53"
                ></CheckList>
              </div>
              <div className="home-container11"></div>
            </div>
            <div className="home-container12">
              <div>
                <CheckList
                  text="Cardiovascular disease"
                  rootClassName="check-list-root-class-name54"
                ></CheckList>
                <CheckList
                  text="Gastrointestinal disease"
                  rootClassName="check-list-root-class-name55"
                ></CheckList>
                <CheckList
                  text="Neurological disease"
                  rootClassName="check-list-root-class-name56"
                ></CheckList>
                <CheckList
                  text="Abscesses"
                  rootClassName="check-list-root-class-name57"
                ></CheckList>
                <CheckList
                  text="Inflammations"
                  rootClassName="check-list-root-class-name58"
                ></CheckList>
                <CheckList
                  text="Rigid joints"
                  rootClassName="check-list-root-class-name59"
                ></CheckList>
              </div>
              <div>
                <CheckList
                  text="Blood sugar control"
                  rootClassName="check-list-root-class-name60"
                ></CheckList>
                <CheckList
                  text="Eye infections"
                  rootClassName="check-list-root-class-name61"
                ></CheckList>
                <CheckList
                  text="Diabetes"
                  rootClassName="check-list-root-class-name62"
                ></CheckList>
                <CheckList
                  text="Chronic fatigue syndrome"
                  rootClassName="check-list-root-class-name63"
                ></CheckList>
                <CheckList
                  text="Dental health"
                  rootClassName="check-list-root-class-name64"
                ></CheckList>
                <CheckList
                  text="Insomnia"
                  rootClassName="check-list-root-class-name65"
                ></CheckList>
              </div>
              <div>
                <CheckList
                  text="Sore throat"
                  rootClassName="check-list-root-class-name66"
                ></CheckList>
                <CheckList
                  text="Indigestion"
                  rootClassName="check-list-root-class-name67"
                ></CheckList>
                <CheckList
                  text="Allergies"
                  rootClassName="check-list-root-class-name68"
                ></CheckList>
                <CheckList
                  text="Hay fever"
                  rootClassName="check-list-root-class-name69"
                ></CheckList>
                <CheckList
                  text="Acid reflux"
                  rootClassName="check-list-root-class-name70"
                ></CheckList>
                <CheckList
                  text="..and many more!"
                  rootClassName="check-list-root-class-name71"
                ></CheckList>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-sectionlast">
        <div className="home-faq">
          <h1 className="home-h14 Heading2">
            <span>
              Frequently
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Asked Questions</span>
          </h1>
          <div className="home-container16"></div>
          <Accordionopen
            aTitle="How do we produce the honey?"
            aDescription="Our honey is made by bees collecting nectar from flowers and converting it into honey through a process of enzymatic digestion and evaporation. Beekeepers then harvest the honey and bottle it for consumption, creating a pure and natural sweetener with numerous health benefits."
            rootClassName="accordionopen-root-class-name"
          ></Accordionopen>
          <Accordioncollapse
            aTitle="Do you do deliveries in every Romania?"
            rootClassName="accordioncollapse-root-class-name"
          ></Accordioncollapse>
          <Accordioncollapse
            aTitle="Can I purchase the products directly from the store?"
            rootClassName="accordioncollapse-root-class-name2"
          ></Accordioncollapse>
          <Accordioncollapse
            aTitle="How many servings are recommended for this?"
            rootClassName="accordioncollapse-root-class-name1"
          ></Accordioncollapse>
          <Accordioncollapse
            aTitle="Do you support paypal?"
            rootClassName="accordioncollapse-root-class-name3"
          ></Accordioncollapse>
        </div>
        <div className="home-container17">
          <div className="home-map">
            <div className="home-container18"></div>
            <div className="home-div">
              <DangerousHTML
                html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.3497852500822!2d21.239585905535094!3d45.760019776090616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474567a68cd698b7%3A0xe73ca84682b029f!2sAvocat%20Mihes%20Andreea!5e0!3m2!1sen!2sid!4v1676963512513!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
              ></DangerousHTML>
            </div>
            <div className="home-container19"></div>
          </div>
          <div className="home-infodetails">
            <div className="home-container20">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M753.365 226.304c-133.291-131.115-349.397-131.115-482.688 0-133.291 131.157-133.291 343.765 0 474.88l241.323 237.44 241.365-237.44c133.291-131.115 133.291-343.723 0-474.88zM512 575.957c-28.501 0-55.253-11.093-75.435-31.232-41.6-41.6-41.6-109.269 0-150.869 20.139-20.139 46.933-31.232 75.435-31.232s55.296 11.093 75.435 31.232c41.6 41.6 41.6 109.312 0 150.869-20.139 20.139-46.933 31.232-75.435 31.232z"></path>
              </svg>
              <span className="Subtitle1.bold">Miere Naturala</span>
            </div>
            <span className="home-text08 Subtitle1">
              <span className="Subtitle1">
                Alee Privighetorilor nr. 1-T,6,Timisoara
              </span>
              <br></br>
              <span className="Subtitle1">220041, Romania</span>
            </span>
          </div>
          <div className="home-infodetails1">
            <svg viewBox="0 0 804.5714285714286 1024" className="home-icon2">
              <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
            </svg>
            <span className="Subtitle1.bold">
              +40(234)217678
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-infodetails2">
            <svg viewBox="0 0 1024 1024" className="home-icon4">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <span className="Subtitle1.bold">mierenaturala@gmail.com</span>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home

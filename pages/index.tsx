import Head from "next/head";

import Navbar from "../components/navbar";
import FeaturesDetail from "../components/features-detail";
import ProductDetails from "../components/product-details";
import PrimaryButton from "../components/primary-button";
import CheckList from "../components/check-list";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Miere Naturala</title>
          <meta property="og:title" content="Miere Naturala" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <div className="home-container01">
          <div className="home-container02">
            <h1 className="home-h1 LargeTitle">
              100% Organic Nature Premium Honey
            </h1>
            <span className="home-text">
              Discover the pure sweetness of our honey products. From jars of
              golden goodness to artisanal treats, we&apos;ve got everything to
              satisfy your honey cravings.
            </span>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/honey drip.png"
          className="home-image"
        />
        <div className="home-container03">
          <div className="home-container04">
            <h1 className="home-h11 Heading2">
              Deliciously best grade homemade honey
            </h1>
            <div className="home-container05">
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
            className="home-image1"
          />
        </div>
        <div className="home-container06">
          <div className="home-container07">
            <h1 className="home-h12 Heading2">Our Products</h1>
            <div className="home-container08">
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
            className="home-image2"
          />
        </div>
        <div className="home-container09">
          <img
            alt="image"
            src="/playground_assets/pngegg [12] 1.png"
            className="home-image3"
          />
          <div className="home-container10">
            <h1 className="home-h13 Heading2">
              <span>
                Elevated quality against
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span>hundred of diseases</span>
            </h1>
            <div className="home-container11">
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
                  text="Insomnia"
                  rootClassName="check-list-root-class-name17"
                ></CheckList>
              </div>
              <div>
                <CheckList
                  text="Sore throat"
                  rootClassName="check-list-root-class-name2"
                ></CheckList>
                <CheckList
                  text="Indigestion"
                  rootClassName="check-list-root-class-name3"
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
                <CheckList
                  text="..and many more!"
                  rootClassName="check-list-root-class-name9"
                ></CheckList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

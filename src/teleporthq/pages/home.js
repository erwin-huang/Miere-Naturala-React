import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Short Impassioned Kudu</title>
        <meta property="og:title" content="Short Impassioned Kudu" />
      </Helmet>
    </div>
  )
}

export default Home

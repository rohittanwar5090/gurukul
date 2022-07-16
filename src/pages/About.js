import React from 'react'
import { Helmet } from 'react-helmet'
import AboutHeader from '../components/About/AboutHeader'
import Inspiration from '../components/About/Inspiration'
import MissionRows from '../components/About/MissionRows'
import Loader from '../components/Loader'
import useLoader from '../components/useLoader'
function About() {
  const loading = useLoader();
  return (
    <>
      <Helmet>
        <title>
          About-Honor Above All
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          content="Honor Above All "
          name="description"
        />
        <meta
          content="Honor Above All "
          property="og:title"
        />
        <meta
          content="Honor Above All "
          property="og:description"
        />

        {
          /**
            <meta
          content=""
          property="og:image"
      />
           */
        }
        <meta
          content="Honor Above All "
          property="twitter:title"
        />
        <meta
          content="Honor Above All "
          property="twitter:description"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      {
        loading ? (
          <Loader loading={loading} />
        ) : (
          <>
            <AboutHeader />
            <MissionRows />
            <Inspiration />
          </>
        )
      }

    </>
  )
}

export default About
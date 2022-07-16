import React from 'react'
import { Helmet } from 'react-helmet'
import ContactUs from '../components/Contact/ContactUs'
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
// import GoogleMap from '../components/Contact/GoogleMap'

function Contact() {
  const loading = useLoader();
  return (
    < >
      <Helmet>
        <title>
          Contact-Honor Above All
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
            <ContactUs />
            <div>
              <h1 className='flex justify-center mt-20 mb-20 font-bold text-2xl'>Get in touch</h1>
              {/* <GoogleMap/> */}
            </div>
          </>
        )
      }


    </>
  )
}

export default Contact
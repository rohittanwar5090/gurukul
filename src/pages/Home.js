import React from 'react'
import { Helmet } from 'react-helmet'
import ContactAddress from '../components/Contact/ContactAddress'
import CoursesBanner from '../components/Home/CoursesBanner'
import HomeCourses from '../components/Home/HomeCourses'
import HomeHeader from '../components/Home/HomeHeader'
import HomeRow from '../components/Home/HomeRow'
import Vision from '../components/Home/Vision'
import Loader from '../components/Loader'
import useLoader from '../components/useLoader'
import pic from './p1.jpeg'
function Home() {
  const loading = useLoader()
  return (
    <>
      <Helmet>
        <title>
        Sanskar Gurukul
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
          <HomeHeader
        src={pic}
        mainHeading='प्रतिष्ठा: परम्परा: अनुशासन:'
        subHead='A Great Place For Education.'
        height='100vh'
      />
      <div className=''>
        <div className='max-w-6xl mx-auto'>
          <HomeRow
            src='/images/audi.jpeg'
            mainheading='Sanskar Gurukul of Law'
            maintext='The Bar Council of India, a statutory body created in accordance with section 4 of the Advocates Act of 1961, oversees legal education in India. Any institution in India that offers legal education must have the Bar Council of India approval. MEP presents the society with its aspiring future legal advisors while rigorously adhering to the rules and guidelines established by BCI.'
            first
          />
          <HomeRow
            src='/images/student1.jpeg'
            mainheading='Sanskar Gurukul of Law'
            maintext='The Bar Council of India, a statutory body created in accordance with section 4 of the Advocates Act of 1961, oversees legal education in India. Any institution in India that offers legal education must have the Bar Council of India approval. MEP presents the society with its aspiring future legal advisors while rigorously adhering to the rules and guidelines established by BCI.'
          />
        </div>
        <CoursesBanner />
        <div className='max-w-6xl px-3 lg:px-0 mt-20 mx-auto lg:grid grid-cols-2  space-y-5 lg:space-y-0 gap-5'>
          <div className='max-w-6xl px-3 lg:px-0 my-auto mx-auto lg:grid grid-cols-2  space-y-5 lg:space-y-0 gap-5'>
            <HomeCourses text='Glorious Years' heading='8' benefits={false} />
            <HomeCourses text='Alumini' heading='500+' benefits={false} />
            <HomeCourses text='Faculty' heading='50+' benefits={false} />
            <HomeCourses text='Programs' heading='16+' benefits={false} />
          </div>
          <ContactAddress />
        </div>
      </div>
      <Vision />
          </>
        )
      }
      
    </>
  )
}

export default Home
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
            mainheading='Sanskar Gurukul School of Law'
            maintext='Legal education in India is governed by the Bar Council of India, a statutory organisation established in accordance with section 4 of the Advocates Act of 1961. The Bar Council of India must approve every institution in India that provides legal education. Sanskar Gurukul vigorously complies with the laws and regulations established by BCI while presenting the society with its prospective future legal advisors.'
            first
          />
          <HomeRow
            src='/images/student1.jpeg'
            mainheading='Sanskar Gurukul School of Management'
            maintext='With the unique features of systems orientation and a blend of creativity and analytical problem-solving skills, MBA is aimed to develop holistic managers who internalize a synthesis of conventional and modern management – thinking and who can comfortably adapt to changing business requirements. The program provides the students with various routes to the industry, matching its requirements with their skills and predispositions.'
          />
          <HomeRow
            src='https://img.etimg.com/thumb/msid-88495072,width-300,imgsize-99234,,resizemode-4,quality-100/students-.jpg'
            mainheading='Sanskar Gurukul School of Pharmacy and Nursing'
            maintext='When chosen as a career, pharmacy offers a variety of benefits and opportunities, including the chance to work in both inside and outside the healthcare sector. The pharmaceutical industry is expanding rapidly both domestically and internationally in a variety of sectors, including testing, distribution, and research and development. There is little doubt that it has helped to create jobs for qualified pharmacists. According to predictions, the business will continue to expand exponentially over the next few decades.'
            first
          />
          {/* <HomeRow
            src='https://media.istockphoto.com/photos/young-happy-students-in-india-stock-image-picture-id1028273828?k=20&m=1028273828&s=612x612&w=0&h=2HvNwdpJfqWxYyn_kqn7fTcToMAktTcZEiikqBXo7zI='
            mainheading='Sanskar Gurukul School of Education'
            maintext='The Bar Council of India, a statutory body created in accordance with section 4 of the Advocates Act of 1961, oversees legal education in India. Any institution in India that offers legal education must have the Bar Council of India approval. MEP presents the society with its aspiring future legal advisors while rigorously adhering to the rules and guidelines established by BCI.'
          /> */}
           <HomeRow
            src='https://scholarship-positions.com/wp-content/uploads/2017/09/Government-Scholarships-for-College-and-University-Students-in-India.jpg'
            mainheading='Sanskar Gurukul School of Medical Sciences'
            maintext='Sanskar Gurukul is a top supplier of healthcare and research facilities. It was founded with the intention of acting as a hub for developing excellence in all areas of health care.Today, Sanskar Gurukul has designated all-inclusive care centres with cutting-edge science prospering alongside research and therapy. This is done with a real dedication to providing excellent patient care, ground-breaking research, and amazing facilities.'
            
          />
          <HomeRow
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRciMO1ZXUDoH7O5iSIPt4wgD_4WDqOC_mDRg&usqp=CAU'
            mainheading='Sanskar Gurukul School of Finance'
            maintext='By utilising the most recent methods developed in the domains of Economics and Business, the programmes at Sanskar Gurukul School of Finances are created to address the growing demand for an analytical and quantitative approach to problem resolution in the evolving corporate world.The current research interests of the Department Faculty include, Business Policy and Strategy, Industry Studies, Environmental and Resource Economics, Foreign Trade, Macro Economic, Policy, International Finance and Marketing, Applied Econometrics, Energy Economics, Labour Economics, Urban Economics, and Economics of Climate Change.'
            first
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
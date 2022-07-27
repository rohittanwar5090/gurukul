import React from 'react'
import CourseHeader from '../components/Courses/CourseHeader'
import OurCourses from '../components/Courses/OurCourses'
import { ProfessionalCourses } from '../components/Courses/ProfessionalCourses'
import { GraduationCourses } from '../components/Courses/GraduationCourses'
import { DiplomaCourses } from '../components/Courses/DiplomaCourses'
import { PostGraduation } from '../components/Courses/PostGraduation'
import { Helmet } from 'react-helmet'
import useLoader from '../components/useLoader'
import Loader from '../components/Loader'

function Service() {
  const loading = useLoader();
  return (
    <>
      <Helmet>
        <title>
          Courses-Honor Above All
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
          <CourseHeader />
            <h1 className='text-center text-4xl mt-4 bg-gradient-to-r from-[#025091] to-[#71C5EE] p-4 w-48 mx-auto text-white rounded-lg'>COURSES</h1>
            <div className='grid grid-cols-1 gap-4 mx-auto md:grid-cols-4 '>
              <OurCourses title={'Professional Courses'} courses={ProfessionalCourses} />
              <OurCourses title={'Graduation Courses'} courses={GraduationCourses} />
              <OurCourses title={'Post Graduation'} courses={PostGraduation} />
              <OurCourses title={'Diploma'} courses={DiplomaCourses} />
            </div>
          </>
        )
      }
      

    </>
  )
}

export default Service


import React from 'react'
import HomeCourses from '../components/Home/HomeCourses'
import HomeHeader from '../components/Home/HomeHeader'
import HomeRow from '../components/Home/HomeRow'
import Vision from '../components/Home/Vision'
function Home() {
  return (
    <div>
      <HomeHeader />
      <div className='max-w-6xl  mx-auto'>
        <HomeRow src='/images/audi.jpeg' first />
        <HomeRow src='/images/audi.jpeg' />
        <div className='max-w-6xl px-3 lg:px-0 mt-20 mx-auto lg:grid grid-cols-2  space-y-5 lg:space-y-0 gap-5'>
          <div className='max-w-6xl px-3 lg:px-0 mt-20 mx-auto lg:grid grid-cols-2  space-y-5 lg:space-y-0 gap-5'>
            <HomeCourses src='/images/audi.jpeg' text='lorem2' heading='hi there' benefits={false} />
            <HomeCourses src='/images/audi.jpeg' text='lorem2' heading='hi there' benefits={true} />
            <HomeCourses src='/images/audi.jpeg' text='lorem2' heading='hi there' benefits={false} />
          <HomeCourses src='/images/audi.jpeg' text='lorem2' heading='hi there' benefits={true} />
          </div>
          <HomeCourses src='/images/audi.jpeg' text='lorem2' heading='hi there' benefits={false} />
          
        </div>
      </div>
      <Vision />
    </div>
  )
}

export default Home
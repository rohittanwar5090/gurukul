import React from 'react'
import { Link } from 'react-router-dom'

function OurCourses({ title, courses }) {
  return (
    <div>
      <h1 className='text-4xl mt-16 text-center text-white rounded-lg bg-gradient-to-r from-[#025091] to-[#71C5EE]'>{title}</h1>
      {courses?.map((course) => {
        return (
          <Link
            key={course.link}
            to={course.link}
            className="grid grid-rows-3 bg-gradient-to-r from-[#025091] to-[#71C5EE] text-center text-base mt-4 border-r-2 rounded-lg text-center pt-8">
            {course.CourseName}
        </Link>          
        )
      })}
    </div>
  )
}

export default OurCourses







import React from 'react'
import photo from './courses.webp'
import { useParams } from 'react-router-dom';
import { ProfessionalCourses } from './ProfessionalCourses';
import { GraduationCourses } from './GraduationCourses';
import { PostGraduation } from './PostGraduation';
import { DiplomaCourses } from './DiplomaCourses';
import './IndividualCourses.css'
function IndividualCourses() {
  const { c } = useParams();
  const allCourses = ProfessionalCourses.concat(GraduationCourses , PostGraduation, DiplomaCourses)  
  return (
    <div>
      <div className='py-4 lg:px-8 mb-20 bg-gradient-to-r from-[#71c5ee] '>
        <div
          className=" mt-20 lg:mt-16 lg:px-5 text-center py-40 text-[#424348]"
        >
          <div className="w-4/5 mx-auto">
            <h1 className='mb-5 text-3xl lg:text-5xl font-bold '>
              {c}
            </h1>
          </div>
        </div>
      </div>
      {/* ------------about the courses---------- grid grid-cols-1 gap-4 mx-auto md:grid-cols-4 */}
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 mx-auto  h-max '>
        <div className='text-center  '>
          {allCourses.filter((course) => {
            return (course.CourseName === c)
          }).map((ans) => {
            return (
              <div>            
                  <h1 className='text-4xl'>Sanskar Gurukul Offers</h1>                
                <div className='mt-8 h-90'>
                  <h1 className=' p-2'>Course Name :{ans.CourseName}</h1>
                  <h1 className=' p-2'>Affiliation: {ans.Affiliation}</h1>
                  <h1 className=' p-2'>Degree Level :{ans.Eligibility}</h1>
                  <h1 className=' p-2'>Course Duration:{ans.Duration}</h1>
                  <h1 className=' p-2'>Minimum Score:{ans.Score}</h1>
                  <h1 className=' p-2'>Fee Structure{ans.Fee}</h1>
                  <button className='glow-on-hover my-4'><a href="/prospectus.pdf" download>Download Form</a></button>                  
                </div>
              </div>
            )
          })
          }
        </div>
        <div className='image h-90'>
          <img src={photo} alt="" />
        </div>
      </div>
      {/* ------------end of  the courses---------- */}
    </div>
  )
}

export default IndividualCourses



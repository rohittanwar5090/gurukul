import React from 'react'
import './CoursesBanner.css'
function HomeLead() {
    return (        
        <div className=" flex flex-col justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img leading-loose">
            <div className='text-center text-white -mt-16 mb-8 '>
                <h1 className='text-2xl font-semibold font-sans'>Explore academcis</h1>
                <h1 className=' text-4xl border-b-2 w-3/4 mx-auto pb-4'>Program Offered</h1>
            </div>
            <div className='grid grid-cols-4 gap-4 text-center text-white  '>
                <div className='border-r-2 '>
                    <h1 className='text-2xl font-semibold font-sans'>Professional Courses</h1>
                    <ul class="marker:text-sky-400 list-disc pl-5 space-y-3 text-white-500">
                        <li>Bachelor of Laws (L.L.B)</li>
                        <li>Integrated Bachelor of Arts & Bachelor of Laws (B.A. L.L.B.)</li>
                        <li>Bachelor of Education (B.Ed.)</li>
                    </ul>
                </div>
                <div className='border-r-2'>
                    <h1 className='text-2xl font-semibold font-sans'>Graduation Courses</h1>
                    <ul class="marker:text-sky-400 list-disc pl-5 space-y-3 text-white-500">
                        <li>Bachelor of Arts (B.A)</li>
                        <li>Bachelor of Commerce (B.COM)</li>
                        <li>Bachelor of Arts (B.A.)</li>
                        <li>Bachelor of Business Administration ( B. B. A.)</li>
                        <li>Bachelor of Computer Application ( B. C. A.)</li>
                        <li>Bachelor of Science (B.Sc.)</li>
                        <li>Bachelor of Pharmacy (B.Pharma.)</li>
                    </ul>
                </div>
                <div className='border-r-2'>
                    <h1 className='text-2xl font-semibold font-sans'>Post Graduation</h1>
                    <ul class="marker:text-sky-400 list-disc pl-5 space-y-3 text-white-500">
                        <li>Master In Arts (M.A.)</li>
                        <li>Master In Commerce</li>
                        <li>Master In Business Adminstration(M.B.A.)</li>
                        <li>Master In Computer Application</li>
                        <li>Master In Science</li>                    
                    </ul>
                </div>
                <div >
                    <h1 className='text-2xl font-semibold font-sans'>Diploma</h1>
                    <ul class="marker:text-sky-400 list-disc pl-5 space-y-3 text-white-500">
                        <li>Diploma in Engineering ( Polytechnic)</li>
                        <li>Diploma In Pharmacy (D.Pharma.)</li>                        
                    </ul>
                </div>
            </div>
        </div>    
    )
}

export default HomeLead


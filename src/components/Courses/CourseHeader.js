import React from 'react'
function CourseHeader() {
    return (
        <div className='p-5 lg:px-8'>
            <div className="grid items-center lg:grid-cols-2 mt-20 lg:mt-32 lg:px-5 ">
                <div className="lg:col-span-1 ">
                    <p className='text-[#186FC5]  font-bold text-3xl lg:text-4xl mt-2'>
                    The opportunity of a Sanskar Gurukul education attracts the brightest minds from around the country.
                    </p>
                </div>
                <div className='lg:col-span-1 mt-8 lg:mt-0 flex justify-center items-center '>
                    <img src='/images/coursesheader.png' className='w-full lg:w-4/5 h-auto object-contain' alt="features-header" />
                </div>
            </div>
            {/* <div className='text-[#186FC5] font-bold text-center px-4 lg:px-10 py-5'>
                <p>Scroll down for a comprehensive list of our courses</p>
            </div> */}
        </div>
    )
}

export default CourseHeader
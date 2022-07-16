import React from 'react'
import HomeHeader from '../Home/HomeHeader'
function Hostel() {
  return (
    <div>
            <HomeHeader
                src='https://www.cmr.edu.in/wp-content/uploads/sites/3/2019/01/hostel-1.jpg'
                mainHeading={'ClassRoom @ Sanskar Gurukul'}
                height='100vh'
            />
            <div className='text-center font-sans my-8 w-4/5 mx-auto'>
                <h1 className='text-2xl my-4'>ClassRooms At Sanskar Gurukul</h1>
                <p>Whether students begin their undergraduate education and pursue a strong educational foundation or seek an advanced degree with a professional focus, Sanskar Gurukul adhere to the highest standard of academic enterprise and innovation. In the same pursuit the classrooms in the institution are highly education friendly. They are well lit and airy, supporting high concentration on the subject matter being taught by our expert faculties.The classrooms are designed for discussions, and nearly every classroom incorporates state of the art technology.
                    Students do learn in traditional lecture halls, but classrooms even exist outdoors for some programs. Learning by doing means that classrooms simulate professional environments.
                </p>
            </div>
          
        </div>
  )
}

export default Hostel
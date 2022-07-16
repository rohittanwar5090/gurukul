import React from 'react'
import Mission from '../About/Mission'
import HomeHeader from '../Home/HomeHeader'
function Cafeteria() {
  return (
    <div>
            <HomeHeader
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Infosys.Electronic.City.Cafeteria.JPG/1200px-Infosys.Electronic.City.Cafeteria.JPG"
                mainHeading={'ClassRoom @ Sanskar Gurukul'}
                height='100vh'
            />
            <div className='text-center font-sans my-8 w-4/5 mx-auto'>
                <h1 className='text-2xl my-4'>ClassRooms At Sanskar Gurukul</h1>
                <p>Whether students begin their undergraduate education and pursue a strong educational foundation or seek an advanced degree with a professional focus, Sanskar Gurukul adhere to the highest standard of academic enterprise and innovation. In the same pursuit the classrooms in the institution are highly education friendly. They are well lit and airy, supporting high concentration on the subject matter being taught by our expert faculties.The classrooms are designed for discussions, and nearly every classroom incorporates state of the art technology.
                    Students do learn in traditional lecture halls, but classrooms even exist outdoors for some programs. Learning by doing means that classrooms simulate professional environments.
                </p>
            </div>
            <div className='max-w-6xl px-3 lg:px-0 mt-20 mx-auto lg:grid grid-cols-3  space-y-5 lg:space-y-0 gap-5 my-20'>
                <Mission
                    src='https://i0.wp.com/mepedu.in/wp-content/uploads/2021/07/cafe.jpg?w=1600&ssl=1'
                    // benefits={false}
                    heading='Chit Chat & Learn'
                    // text='The library follows an Open Access policy. You can pick a book of your choice from the shelves and may refer to it in the library or borrow them. The library has airy and spacious reading rooms that can accomodate more than 100 students at a time. '
                />
                <Mission
                    benefits={false}
                    src='https://i0.wp.com/mepedu.in/wp-content/uploads/2021/07/food_mep.png?w=1600&ssl=1'
                    heading=' Food Court'
                    // text='The library has a good collection of Encyclopaedias, Yearbooks and other reference titles. Reference books are there on varied topics to the needs of students supporting curriculum and innovation. The reference books cannot be borrowed.'
                />
                <Mission
                    benefits={false}
                    src='https://i0.wp.com/mepedu.in/wp-content/uploads/2021/07/healthy_cafe.jpg?w=1600&ssl=1'
                    heading=' Healthy & Hygenic '
                    // text=" The library has a symposium hall to be used for performances, related activities like group discussions and presentations by faculty and students. Audio visual facilities are also maintained to provide the users with an unmatched experience."
                />
            </div>
        </div>
  )
}

export default Cafeteria
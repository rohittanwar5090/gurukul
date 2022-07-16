import React from 'react'
import Mission from '../About/Mission'
import HomeHeader from '../Home/HomeHeader'
function Sport() {
  return (
    <div>
      <HomeHeader
        src="https://www.dailyexcelsior.com/wp-content/uploads/2022/01/sports-1.jpg"
        mainHeading={'Sports @ Sanskar Gurukul'}
        height='100vh'
      />
      <div className='text-center font-sans my-8 w-4/5 mx-auto'>
        <h1 className='text-2xl my-4'>Sport At Sanskar Gurukul</h1>
        <p>Games and sports provide the opportunity for engagement, responsibility, enjoyment and a sense of pride in achievement, regardless of scale or magnitude and a sense of team spirit. The love of sport developed at this stage offers life-long benefits, often leading to a happier, healthier and more productive future. The importance of games and sports in student’s life is immense. It has proved to be very therapeutic in nature. Sports help improve stronger social skills, such as dispute management and sport-based interaction.

          Nowadays, sports and games are taken to be a good career option as well. It plays a pivotal role in shaping interest in profession also. Sport can be the one thing that distinguishes students from the rest, especially in competitive scenarios such as college placements and even securing scholarships or funding for education.
        </p>
      </div>
      <div className='max-w-6xl px-3 lg:px-0 mt-20 mx-auto lg:grid grid-cols-3  space-y-5 lg:space-y-0 gap-5 my-20'>
        <Mission
          src='https://i0.wp.com/mepedu.in/wp-content/uploads/2021/07/tracks.jpg?w=344&ssl=1'
          // benefits={false}
          heading='Chit Chat & Learn'
        // text='The library follows an Open Access policy. You can pick a book of your choice from the shelves and may refer to it in the library or borrow them. The library has airy and spacious reading rooms that can accomodate more than 100 students at a time. '
        />
        <Mission
          benefits={false}
          src='https://i0.wp.com/mepedu.in/wp-content/uploads/2021/07/courts.jpg?w=344&ssl=1'
          heading=' Food Court'
        // text='The library has a good collection of Encyclopaedias, Yearbooks and other reference titles. Reference books are there on varied topics to the needs of students supporting curriculum and innovation. The reference books cannot be borrowed.'
        />
        <Mission
          benefits={false}
          src='https://i0.wp.com/mepedu.in/wp-content/uploads/2021/07/indoor.jpg?w=344&ssl=1'
          heading=' Healthy & Hygenic '
        // text=" The library has a symposium hall to be used for performances, related activities like group discussions and presentations by faculty and students. Audio visual facilities are also maintained to provide the users with an unmatched experience."
        />
      </div>

    </div>
  )
}

export default Sport
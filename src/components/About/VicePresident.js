import React from 'react'
import HomeRow from '../Home/HomeRow'
import HomeHeader from '../Home/HomeHeader'
import pic from './vp.jpeg'

function VicePresident() {
  return (
    <div>
      <HomeHeader
        src ={pic}
        mainHeading={'Message From Vice President'}
        height='70vh'
      />
      <HomeRow
      src='https://media-exp2.licdn.com/dms/image/C4E03AQEjc-ZtJRy5Uw/profile-displayphoto-shrink_200_200/0/1601660369264?e=2147483647&v=beta&t=Ny3RcQedVgR__icd5sPovuV6iQinTUkmbY5Z1mP1gEk'
        mainheading='A very warm welcome to Sanskar Gurukul'
        maintext='In this entirely new era of Globalization of education the obvious focus has to be on its quality.There is no single touchstone of quality. It is achieved through continuous polishing of every possible opportunity. Our educational institution strives continuously for sustenance and enhancement of quality in every field of its activity.
        We work with untiring diligence to realize our mission of providing the best learning, teaching and research opportunities to students and academicians alike, and doing this we preferably arm our students with the basics of modern knowledge and high values.        
        Our faculty members are continuously indulged in the research activities which unveils obvious extraordinary enrichment of the experience of our students that is realized at every level of learning.'
        secText='Mr. Rahul Tanwar'
      /> <HomeRow
      src='data:image/jpeg;base64,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'
        mainheading='HEARTY WELCOME TO GURUKUL !'
        maintext='There are many ways you can make an impact on the world. But there is no greater impact that you can make than spreading education, and empowering people who’ll empower and teach people, who, in turn, will empower and teach more. The research training provided to our students creates the next generation of scholars well-prepared to advance knowledge and transfer technology.
        The extensive research opportunities to an ever-increasing group of our students adds a dimension of experience to their learning that simply cannot be duplicated in mere classroom atmosphere. Our students learn the joy as well as the rigours of new discovery, and acquire skills of inquiry, evaluation, and communication that provide a foundation for the next phases of their careers and lives. Sanskar Gurukul stands committed to the practice of academic freedom and encourages cultural diversity as it continues to attract students and faculty.'
        secText='Mr.Shiv Kumar Tanwar'
        first
      />

    </div>
  )
}

export default VicePresident



// src='https://sanskareducationalgroup.ac.in/wp-content/uploads/2017/01/banner-leaders.jpg'
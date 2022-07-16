import React from 'react'
import HomeHeader from '../Home/HomeHeader'
function Lab() {
  return (
    <div>
      <HomeHeader
        src="https://upload.wikimedia.org/wikipedia/commons/8/8a/CICB%27s_Laboratory.jpg"
        mainHeading={'Labs @ Sanskar Gurukul'}
        height='100vh'
      />
      <div className='text-center font-sans my-8 w-4/5 mx-auto'>
        <h1 className='text-2xl my-4'>Labs At Sanskar Gurukul</h1>
        <p>Buildings, campus area, classrooms, laboratories, cafeteria, Library and equipment- education infrastructure – are crucial elements of learning environments in an educational institution. There is strong evidence that high-quality infrastructure facilitates better instruction, improves student outcomes, and reduces dropout rates, among other benefits.
          It is found that environmental and design elements of any educational institution’s infrastructure together makes learning easier and effective. This shows that the design of education infrastructure affects learning through three interrelated factors: naturalness (e.g. light, air quality), stimulation (e.g. complexity, color), and individualization (e.g. flexibility of the learning space).
          Here in Sanskar Gurukul we provide students with every aspect of required infrastructure and enable them to learn at their desired pace. We have continuously been working on sharpening our facilities in accordance to the contemporary requirements. Although we have extremely rich infrastructure, we believe in continuous upgradation of its every aspect to match the world class standards.
        </p>
      </div>

    </div>
  )
}

export default Lab
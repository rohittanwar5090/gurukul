import React from 'react'
import Mission from './Mission'


function MissionRows() {
    return (
        <>
            <div className='grid place-items-center'>
                <h1 className='text-blue-500 mt-2 text-6xl co'>Our Mission</h1>
                {/* <Link to='/work' target='_blank'>
                    <button className='text-white  mt-3 rounded-md px-4 py-2  bg-[#df7324] '
                    >Checkout Our Work Here</button>
                    span
                </Link> */}
            </div>
            <div className='max-w-6xl px-3 lg:px-0 mt-20 mx-auto lg:grid grid-cols-3  space-y-5 lg:space-y-0 gap-5'>
                <Mission
                    src='/images/services/discipline.jpeg'
                    benefits={false}
                    heading='अनुशासन:'
                    text='To create a transformative educational experience for students , focussed on deep disciplinary knowledge ; problem-solving ; leadership , communication and interpersonal skills ; and personal health and wellbeing'
                />
                <Mission
                    benefits={false}
                    src='/images/services/prestige.jpeg'
                    heading=' प्रतिष्ठा'
                    text='To cultivate a transformative community commited to attaracting and retaining diverse, world class talent and opened to free exchange of ideas , where research , creativity , innovation and entrepreneurship can flourish and ensuring individuals can achieve there full potential'
                />
                <Mission
                    benefits={false}
                    src='/images/services/legacy.jpeg'
                    heading=' परम्परा: '
                    text=" Sanskar Gurukul will have a transformative impact on society through continual innovation in education , research , creativity and entrepreneurship and also to impact society in a transformative way reasonally nationally and globally by engaging with partners "
                />
            </div>
        </>
    )
}

export default MissionRows

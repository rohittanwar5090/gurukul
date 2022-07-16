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
                    src='/images/services/discpline.png'
                    benefits={false}
                    heading='अनुशासन:'
                    text='Intentionally choose to pursue something better for yourself, and you do it in spite of factors such as distractions, hard work, or unfavorable odds. '
                />
                <Mission
                    benefits={false}
                    src='/images/services/prestige.png'
                    heading=' प्रतिष्ठा'
                    text='Just do it.'
                />
                <Mission
                    benefits={false}
                    src='/images/services/legacy.png'
                    heading=' परम्परा: '
                    text=" legacy"
                />
            </div>
        </>
    )
}

export default MissionRows

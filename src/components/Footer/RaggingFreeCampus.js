import React from 'react'
import HomeHeader from '../Home/HomeHeader'
import pic from './ragging.webp'
import ContactForm from '../Contact/ContactForm'

function RaggingFreeCampus() {
    return (
        <div>
            <HomeHeader
                src={pic}
                mainHeading={'Anit Ragging Campus'}
                height='100vh'
            />
            <div className='text-center font-sans my-8 w-4/5 mx-auto'>
                <h1 className='text-2xl my-4'>Ragging Free Campus</h1>
                <p>As per the direction of the Hon’ble Supreme Court of India, the institute strictly follows the “UGC regulation on curbing the menace in higher Educational Institutions 2009”.
                    Sanskar Gurukuk ensures “Ragging-Free” Campus with the fullest co-operation of Students and Staff. A whole system has been formed which closely monitors the activities in the
                    campus to keep it ragging free. In order to build up the confidence in the minds of freshers, faculty do regularly visit the hostels to ensure truest interaction between freshers and
                    senior students and spend quality time in the campus during initial few months.
                </p>
            </div>
            <h1 className='text-center text-2xl'>Report an incident</h1>
            <div className='w-2/5 mx-auto'>
                <ContactForm />
            </div>
        </div>
    )
}

export default RaggingFreeCampus



// src='https://sanskareducationalgroup.ac.in/wp-content/uploads/2017/01/banner-leaders.jpg'
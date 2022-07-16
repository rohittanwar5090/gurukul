import React from 'react'
import { Link } from 'react-router-dom'

function HomeRow({ src, mainheading, maintext, first, secText, secImg }) {
    return (
        <div className={`px-3 lg:px-0 my-16 lg:justify-around lg:items-center lg:grid lg:grid-cols-2 ${first && 'p-1'} relative`}>
            <div className={`flex lg:justify-center lg:items-center lg:col-span-1 ${first && 'order-last'} `}>
                <img src={src} className='block w-screen mx-auto rounded-lg' alt="services-features" />
            </div>

            <div
                className={`pt-10 mx-auto w-11/12 lg:w-3/4 lg:col-span-1  lg:text-left ${first && 'ml-auto'}`}>
                <h1 className={`text-2xl font-bold capitalize  text-[#186FC5]`} >{mainheading}</h1>
                <p className='text-md my-8 leading-loose text-[#2A3158]' >{maintext}</p>
                {
                    secText && <p className={` text-4xl text-md mt-3 text-[#2A3158]   ${secImg && 'lg:mb-64'}`} >{secText}</p>
                }

                {
                    !secImg &&
                    <Link to='/courses' target='_blank'>
                        <button className='text-white bg-[#081953]  mt-3 rounded-md px-4 py-2' >Get started</button>
                    </Link>
                }
                
            </div>

            {
                secImg &&
                <div className='flex  bg-white absolute -bottom-36 lg:right-10 lg:-bottom-48'>
                    {
                        secImg.map((img, index) => (
                            <img src={img} key={index} className='w-28 lg:w-64 h-auto object-contain' alt="services-features" />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default HomeRow

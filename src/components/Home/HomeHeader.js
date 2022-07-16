import React from 'react'

function CertificateHeader({src , mainHeading , subHead, height}) {
    return (
        <div
            style={{
                backgroundImage: `url(${src})`,
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: `${height}`
            }}
            className='px-2 lg:px-0 '
        >
            <div className='text-center capitalize pt-40  font-black '>
                <h1 className='text-5xl lg:text-4xl  text-[#FFFFFF] bg-vlue'
                >
                    {mainHeading}
                </h1>
                <h6 className='font-sans text-white text-xl lg:text-xl my-10 font-bold'>
                {subHead}
                </h6>
            </div>
            
        </div>
    )
}

export default CertificateHeader

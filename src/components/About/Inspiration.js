import React from 'react'
import Mission from './Mission'

function Inspiration() {
  return (
  <div className='mt-20'>
    <div className='grid place-items-center'>
        <h1 className='text-blue-500 mt-2 text-6xl co'>Our Inspiration</h1>
       
    </div>
    <div className='max-w-4xl px-3 lg:px-0 mt-20 mx-auto lg:grid grid-cols-2  space-y-5 lg:space-y-0 gap-20'>
        <Mission
            src='/images/services/gf.png'          
            text='SHRI LAL SINGH TANWAR '
        />
        <Mission            
            src='/images/services/gm.png'
            // heading=' प्रतिष्ठा'
            text='SMT PRAKASHI DEVI'
        />        
    </div>
</div>
  )
}

export default Inspiration
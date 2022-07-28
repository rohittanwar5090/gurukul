import React from 'react'
import Mission from './Mission'
import tax from '../../Images/tax.jpeg'
import wecarelife from '../../Images/wecarelife.png'
import wecarewealth from '../../Images/wecarewealth.png'
import justice from '../../Images/justice.jpeg'
import CA from '../../Images/CA.jpeg'

function PartnerInSuccess() {
  return (
    <>
    <div className='grid place-items-center'>
        <h1 className='text-blue-500 mt-2 text-6xl co'>Our Partners</h1>
       
    </div>
    <div className='max-w-6xl px-3 lg:px-0 mt-20 mx-auto lg:grid grid-cols-1 space-y-5 lg:space-y-0 gap-5'>
          <div className='max-w-6xl px-3 lg:px-0 my-auto mx-auto lg:grid grid-cols-4  space-y-5 lg:space-y-0 gap-5'>
        <Mission
            src={tax}
            benefits={false}
            heading='Cafe Tax Advisors'
                     
            
        />
        <Mission
            benefits={false}
            src={wecarelife}
            heading=' We Care Life'
            link={'https://wecarelife.in/'}            
            
        />
        <Mission
            benefits={false}
            src={wecarewealth}
            heading=' We Care Wealth '
            link={'https://wecarewealth.com/'}
            
        />
        <Mission
            benefits={false}
            src={justice}
            heading=' Justice India Law Firm'
            
        />
        <Mission
            benefits={false}
            src={CA}
            heading=' Sonia Tanwar & Co. '
            
        />        </div>
    </div>
</>
  )
}

export default PartnerInSuccess
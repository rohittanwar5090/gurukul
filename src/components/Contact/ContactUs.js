import React  from 'react'
import ContactAddress from './ContactAddress';
import ContactForm from './ContactForm';

const ContactUs = () => {
    
  return (
 
<div className="relative flex items-top justify-center min-h-screen bg-slate-200 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                   <ContactAddress/>
                   <ContactForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
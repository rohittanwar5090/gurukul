import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('sanskargurukul', 'template_o9hx7wr', form.current, 'ULaGgLiRqKrmMiFpy')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        // alert('clicked')
        e.target.reset();
      };
    
  return (
    <>
         <form className="p-6 flex flex-col justify-center" ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="email" className="hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="tel" className="hidden">Number</label>
                            <input type="tel" name="telephone" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="query" className="hidden">Query</label>
                            <textarea name="message" placeholder="Query"  cols="30" rows="10" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></textarea>
                            {/* <input type="query" name="query" id="query" placeholder="Query" rows='7' className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/> */}
                        </div>

                        <button type="submit" className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                            Submit
                        </button>
                    </form>
    </>
  )
}

export default ContactForm
import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function AboutHeader() {
  
  // --------------this is the main header presented on the website ----------
  return (
    <>
      <div className="header p-5 lg:px-8">
        <div className="grid place-items-center mt-20 lg:mt-32 lg:px-5 ">
          <div className="px-1 lg:px-0  text-center pb-5">
            <h1 className="text-[#186FC5] filter drop-shadow-xl text-[23px]  lg:text-5xl font-bold flex items-center justify-center capitalize">
              Our  belief
              <span
                className="px-2 text-[23px] lg:text-5xl font-semibold 
                        text-[#df7324]">
                <Typewriter
                  options={{
                    strings: [
                      " प्रतिष्ठा: ",
                      "परम्परा: ",
                      " अनुशासन:"                      
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <h1 className="text-[#186FC5] filter drop-shadow-xl  text-[23px]   lg:text-[40px] font-bold mt-2 lg:mt-5 capitalize">
            ‘Every child matters’
            </h1>
            <br />

            <p className="text-[#2A3158] text-lg my-5">
            Our vision is to develop well rounded, confident and responsible individuals who aspire to achieve their full potential. We will do this by providing a welcoming, happy, safe, and supportive learning environment in which everyone is equal and all achievements are celebrated.
            </p>

            <div>
              <Link
                to="/contact"
                target="_blank"
                className="text-white rounded-md px-4 py-2 bg-[#df7324]">
                Contact
              </Link>
            </div>
{/* 
            <p className="text-[#2A3158] text-lg my-5">
              {`${random} people booked a demo today. Book yours today! `}
            </p> */}

            {/* <div className="mt-5">
              <Link
                to="/ltd"
                target="_blank"
                className="underline font-bold text-[#186FC5]">
                Grab Your Life Time Deal Now!
              </Link>
            </div> */}
          </div>

        </div>
      </div>
    </>
  );
}

export default AboutHeader;

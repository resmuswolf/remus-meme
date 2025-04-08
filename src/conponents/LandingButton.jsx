import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
export const LandingButton = () =>{
  const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowButton(true); // Show the button after 5 seconds
      }, 7000); // 5000ms = 5 seconds
  
      return () => clearTimeout(timer); // Cleanup the timer
    }, []);


    return(
        <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
      duration-500`}
      >
        <div className="h-[66%]"></div>
        {/* <button type="button"
          onClick={() => {navigate('/home')}}
          className="pointer-events-auto text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition duration-50"
        >
          ENTER
        </button> */}

     {
       showButton ?(  <button type="button"
          className="pointer-events-auto text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition duration-50"
        >
          CA - 9Qghkq2T25mnGXCmuW4YtnfsqT8N9gKH7VmZSn48pump
        </button>) : null
      }  

        
      </section>
    </div>
    ) 
}

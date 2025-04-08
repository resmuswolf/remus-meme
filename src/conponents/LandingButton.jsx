import { useNavigate } from "react-router-dom";

export const LandingButton = () =>{

    const navigate = useNavigate();

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

<button type="button"
          className="pointer-events-auto text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition duration-50"
        >
          Website Coming soon...
        </button>
      </section>
    </div>
    ) 
}
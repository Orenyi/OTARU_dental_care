import React from 'react'
import Team from "../../images/Team.jpg"

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-top flex items-center justify-center"
      style={{ backgroundImage: `url(${Team})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="py-28 md:py-36 relative z-40 w-full">
        <div className="px-4 md:px-6 lg:px-6 xl:px-10 
                        max-w-7xl mx-auto 
                        grid grid-cols-1 lg:grid-cols-[2.5fr,3fr]">

          <div>
            <h4 className="text-gray-200 text-[17px] lg:text-[17px] xl:text-[18px]">
              About Us
            </h4>

            <h1 className="text-white mt-3 text-[35px] sm:text-[40px] lg:text-[48px] xl:text-[55px] font-bold leading-tight">
              Who We Are
            </h1>

            <h4 className="text-gray-200 text-[17px] lg:text-[17px] xl:text-[18px] mt-6">
              We are fully certified and registered, operating with a team of
              licensed, experienced, and compassionate dental professionals
              committed to providing safe, effective, and personalized treatment
              for every patient.
            </h4>
          </div>

          <div></div>

        </div>
      </div>
    </section>
  )
}

export default Hero

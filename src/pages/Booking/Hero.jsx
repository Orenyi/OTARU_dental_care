import React from 'react'
import Contact from "../../images/Contact.jpg"

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-top flex items-center justify-center"
      style={{ backgroundImage: `url(${Contact})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="py-28 md:py-36 relative z-40 w-full">
        <div className="px-4 md:px-6 lg:px-6 xl:px-10 
                        max-w-7xl mx-auto 
                        grid grid-cols-1 lg:grid-cols-[2.5fr,3fr]">

          <div>
            <h4 className="text-white text-[17px] lg:text-[17px] xl:text-[18px] uppercase font-semibold">
              Schedule Appointment
            </h4>

            <h4 className="text-gray-200 text-[17px] lg:text-[17px] xl:text-[18px] mt-6">
              We are centrally located in the heart of Abuja, making it easy for patients across the city to access 
              quality dental care. Visit us today for a personalized consultation and leave with a healthier, brighter
              smile.
            </h4>
          </div>

          <div></div>

        </div>
      </div>
    </section>
  )
}

export default Hero

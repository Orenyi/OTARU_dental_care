import React from 'react'
import Doctor from "../../images/Doctor.webp"

const Ceo = () => {
  return (
    <section className="py-16">
      <div className="px-4 md:px-6 lg:px-6 xl:px-10 max-w-7xl mx-auto">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

          {/* ----- TEXT SECTION ----- */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h4 className="text-gray-600 text-[16px] md:text-[18px] mb-3">
              CEO
            </h4>

            <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-black">
              <span className="text-[#28C870]">The Mind</span> Behind OTARU Dental Clinic
            </h2>

            <p className="text-gray-700 mt-5 text-[16px] md:text-[17px] leading-relaxed lg:w-[90%]">
              Dedicated to transforming dental care through innovation, excellence,
              and patient-centered service, our founder leads OTARU Dental Clinic 
              with passion, integrity, and a commitment to creating healthier smiles.
            </p>
          </div>

          {/* ----- IMAGE SECTION ----- */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src={Doctor} 
              alt="CEO of Otaru Dental Clinic" 
              className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] object-cover 
                rounded-2xl shadow-lg"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Ceo

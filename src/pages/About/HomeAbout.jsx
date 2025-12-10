import React from 'react'
import About from "../../images/About.png"


// ----------- react schedule icon ----------
import { FaTooth } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";


const HomeAbout = () => {
  return (
    <section className=''>
        <div className='px-4 md:px-6 lg:px-6 xl:px-10 max-w-7xl mx-auto py-16
         grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-6 xl:gap-0'>
            {/* ------ 1st div -------- */}
            <div className='flex justify-center'>
                <img src={About} alt="" className='w-full max-w-[450px]' />
            </div>

            {/* ----- 2nd div -------- */}
            <div className=''>
                <h2 className='text-[30px] md:text-[40px] font-semibold leading-tight mb-4 text-black'>Your Trusted Destination for Modern
                    <span className='text-[#28C870]'> Dental Care </span></h2>
                <p className='text-[18px] mb-5 text-black'>Known for our uniquely friendly yet highly professional approach,<span className='text-[#28C870]'> OTARU </span> 
                 has become a trusted name in modern dental care across Abuja, Nigeria’s capital city.</p>
                    <ul className="list-none space-y-2 mt-3">
                    <li className="flex items-center gap-2 text-gray-700">
                        <GrStatusGood className="text-[#28C870]" />
                        Qualified
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <GrStatusGood className="text-[#28C870]" />
                        Licensed
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <GrStatusGood className="text-[#28C870]" />
                        Passionate dental professionals
                    </li>
                    </ul>
            </div>
        </div>
    </section>
  )
}

export default HomeAbout
import React from 'react'
import home_4 from '../../images/home_4.jpg'

const Mission = () => {
  return (
    <section className='bg-cover bg-center relative' style={{backgroundImage:`url(${home_4})`}}>
        <div className='absolute inset-0 bg-black bg-opacity-45'></div>
        <div className='px-4 md:px-6 lg:px-6 xl:px-10 max-w-7xl mx-auto py-6 lg:py-12 xl:py-16  z-40'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-8 py-12 ' >
                <div className='backdrop-blur-md bg-black/20 p-5 rounded-lg '>
                    <h2 className='text-[30px] md:text-[40px] font-semibold leading-tight mb-4 text-[#28C870]'>Our Vision</h2>
                    <p className='text-[16px] lg:text-[18px]  mb-5 text-gray-300'>Our vision is to become the most trusted and innovative 
                        dental care provider in Abuja—known for excellence in clinical standards, outstanding patient experience, 
                        and community-focused oral health awareness. We aim to create healthier smiles, inspire confidence, and 
                        set a benchmark for modern, accessible, and affordable dental care in Nigeria.</p>
                </div>
                <div className='backdrop-blur-md bg-black/20 p-5 rounded-lg '>
                    <h2 className='text-[30px] md:text-[40px] font-semibold leading-tight mb-4 text-[#28C870]'>Our Mission</h2>
                    <p className='text-[16px] lg:text-[18px] mb-5 text-gray-300'>At OTARU Dental Clinic, our mission is to deliver exceptional,
                         patient-centered dental care through advanced techniques, modern technology, and a compassionate approach.
                         We are committed to promoting lifelong oral health, restoring confidence with quality-driven treatments,
                         and ensuring every patient feels safe, heard, and valued from the moment they walk in.</p>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Mission
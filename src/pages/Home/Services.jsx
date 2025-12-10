import React from 'react'
// ------------ images uploaded ------------
import ChildDental from "../../images/ChildDental.svg"
import CrownsAndBridges from "../../images/CrownsAndBridges.svg"
import DentureServices from "../../images/DentureServices.svg"
import FillingOfTeeth from "../../images/FillingOfTeeth.svg"
import Scaling from "../../images/Scaling.svg"
import SurgicalExtraction from "../../images/SurgicalExtraction.svg"
import TeethBleaching from "../../images/TeethBleaching.svg"
import ToothImplant from "../../images/ToothImplant.svg"


const servicesList = [
    {
        id: 1,
        img: ChildDental,
        title: "Child Dental"
    },
    {
        id: 2,
        img: CrownsAndBridges,
        title: "Crowns and Bridges"
    },
    {
        id: 3,
        img: DentureServices,
        title: "Denture Services"
    },
    {
        id: 4,
        img: FillingOfTeeth,
        title: "Filling of Teeth"
    },
    {
        id: 5,
        img: Scaling,
        title: "Scaling"
    },
    {
        id: 6,
        img: SurgicalExtraction,
        title: "Surgical Extraction"
    },
    {
        id:7,
        img: TeethBleaching,
        title: "Teeth Bleaching"
    },
    {
        id: 8,
        img: ToothImplant,
        title: "Tooth Implant"
    }
];

const Services = () => {
  return (
    <section id='services' className='bg-[#bbebd3] '>
        <div className='px-4 md:px-6 lg:px-6 xl:px-10 max-w-7xl mx-auto py-16'>
            <div className='text-center mb-14'>
                <h4>OUR SERVICES</h4>
                <h2 className='text-[30px] md:text-[40px] font-semibold leading-tight mb-8 text-black'>
                    Bringing You the Best in Modern <span className='text-[#28C870]'> Dental Services </span></h2>
            </div>

            {/* ----------- service features -------- */}

            <div className='rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.1)] bg-white py-12 '>
                <div className=''>
                    <div href="" className='grid grid-cols-2 lg:grid-cols-4 items-center cursor-pointer'>
                        {servicesList.map((service, index) => (
                            <div key={index} className={` py-6 flex flex-col items-center
                                ${index === servicesList.length - 1 ? "" : "border-r"}
                                 ${index < 6 ? 'border-b ' : ''}
                                 ${index < 4 ? 'lg:border-b' : 'lg:border-b-0' }`}>
                                <img src={service.img} className='w-16 lg:w-20 h-16 lg:h-20'/>
                                <h4 className='text-black text-[14px] lg:text-[16px] xl:text-[18px] mt-6 font-semibold'>
                                    {service.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
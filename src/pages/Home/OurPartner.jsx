import React from 'react'
// ---------- Images Logo -----------
import Reliance_HMO_Logo from "../../images/Reliance_HMO_Logo.png"
import Red_Care_logo from "../../images/Red_Care_logo.png"
import Leadway_logo from "../../images/Leadway_logo.png"
import MSH_logo from "../../images/MSH_logo.png"
import Health_Partners_logo from "../../images/Health_Partners_logo.png"
import Hall_Mark_logo from "../../images/Hall_Mark_logo.png"
import DOT_logo from "../../images/DOT_logo.webp"
import Bastion_logo from "../../images/Bastion_logo.webp"


const partnersLogo = [
    {
        id: 1,
        img: Reliance_HMO_Logo,
        link: 'https://getreliancehealth.com/nigeria/'
    },
    {
        id: 2,
        img: Red_Care_logo,
        link: 'https://redcarehmo.com/'
    },
    {
        id: 3,
        img: Leadway_logo,
        link: 'https://www.leadway.com/'
    },
    {
        id: 4,
        img: MSH_logo,
        link: 'https://www.msh-intl.com/en/'
    },
    {
        id: 5,
        img: Health_Partners_logo,
        link: 'https://healthpartnersng.org/'
    },
    {
        id: 6,
        img: Hall_Mark_logo,
        link: 'https://hallmarkhmo.com/'
    },
    {
        id: 7,
        img: DOT_logo,
        link: 'https://www.dothmo.co/'
    },
    {
        id: 8,
        img: Bastion_logo,
        link: 'https://bastionhmo.com/'
    }
]



const OurPartner = () => {
  return (
    <section>
        <div className='px-4 md:px-6 lg:px-6 xl:px-10 max-w-7xl mx-auto py-16  '>
            <div className='text-center'>
                <h4 className='mb-10 lg:mb-0'>Our HMO Partners</h4>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-y-5 gap-x-10'>
                    {partnersLogo.map((logo)=> (
                        <a 
                            key={logo.id}
                            href={logo.link}
                            target='_black'
                            rel='noopener noreferrer'
                            className='transition-all cursor-pointer'    
                        >
                            <img 
                                src={logo.img} 
                                className=' w-52 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out' />
                        </a>
                    ))}
                </div>

            </div>
        </div>
    </section>
  )
}

export default OurPartner
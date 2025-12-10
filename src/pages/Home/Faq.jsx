import React, {useState} from 'react';
import { IoLogoWhatsapp } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";


// ---------- array of faq questions ----------
const Questions = [
    {
        id: 1,
        title: 'How often should I visit the dentist?',
        answer: "It is recommended to visit the dentist every six months for a routine checkup and cleaning. However, if you have ongoing dental issues, your dentist may suggest more frequent visits."
    },
    {
        id: 2,
        title: 'Do dental procedures hurt?',
        answer: "Most dental treatments are painless, thanks to modern technology and gentle techniques. Local anesthesia or numbing gel is used when necessary to ensure comfort throughout your procedure."
    },
    {
        id: 3,
        title: 'How do I know which treatment I need?',
        answer: "Your dentist will examine your teeth, take X-rays if needed, and discuss your symptoms before recommending the most suitable treatment. You will always be informed and guided through every step."
    },
    {
        id: 4,
        title: 'Do you treat children?',
        answer: "Yes, we offer full pediatric dental care. Our team is trained to provide gentle and friendly treatment for children, ensuring their dental visits are stress-free."
    },
    {
        id: 5,
        title: 'How can I whiten my teeth safely?',
        answer: "Professional teeth whitening at the clinic is the safest and most effective method. Over-the-counter products can work, but they may cause sensitivity or uneven results. A professional dentist ensures safe, long-lasting whitening."
    },
    {
        id: 6,
        title: 'What should I do during a dental emergency?',
        answer: "If you experience severe tooth pain, bleeding, swelling, or a broken/chipped tooth, contact us immediately. Emergency dental care helps prevent complications and relieves pain quickly."
    }
]


const Faq = () => {
    const [activeId, setActiveId] = useState(null);

    const toggleFAQ = (id)=>{
        setActiveId(activeId === id ? null : id);
    }

  return (
    <section id='faq' className="">
        <div className='px-4 md:px-6 lg:px-6 xl:px-10 max-w-7xl mx-auto py-16'>

            {/* ----------- Heading ----------- */}

        <div className="text-center mb-14">
          <h4 className="">FAQ</h4>
          <h2 className="text-[30px] md:text-[40px] font-semibold leading-tight mb-8 text-black">
            Your <span className="text-[#28C870]"> Dental Care </span> Questions Answered
          </h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-6'>
        {/* ---------- testimonial ------------ */}
            <div className='space-y-4'>
                {Questions.map((item) => {
                    const isOpen = activeId === item.id;

                    return (
                        <div key={item.id} className={`rounded-2xl shadow transition-all duration-300 overflow-hidden
                            ${isOpen ? "bg-[#bbebd3] text-black" : "bg-white text-black"}`}>
                            <button 
                                onClick={()=> toggleFAQ(item.id)} 
                                className='w-full flex justify-between items-center p-5 text-left'>
                                <h3 className='text-[18px] lg:text-[20px] font-semibold'>{item.title}</h3>
                                {/* ---------- + & - ----------- */}

                                <span className={`text-[30px] lg:text-[35px] font-bold transition-all duration-300
                                     ${isOpen ? "rotate-180" :"" } `}>
                                    {isOpen ? '-' :'+'}
                                </span>
                            </button>

                            {/* ------  Answer with animation -------- */}

                            <div className={`px-5 pb-5 text-[14px] lg:text-[16px] leading-relaxed transition-all duration-300
                                 ${isOpen ? "max-h-[300px] opacity-100": " max-h-0 opacity-0"}`}>
                                {item.answer}
                            </div>
                        </div>
                    )
                })}

            </div>

            {/* RIGHT SIDE (empty now — ready for Contact Box/Emergency box) */}
          <div className=''>
            <div className='bg-[#bbebd3] flex flex-col items-center p-10 rounded-2xl'>
                <IoLogoWhatsapp className='font-medium text-black text-[65px] mb-4'/>
                <h4 className="font-semibold text-black text-[17px] lg:text-[18px]"> 
                    Let’s Answer Your Questions
                </h4>
                <p className='text-black text-[15px] text-center'>Our team have answers to your questions</p>
                <a href="https://wa.me/2348167527125" target='_blank' rel='noopener noreferrer'>
                    <button className='bg-[#28C870] mt-6 px-6 py-3 rounded-3xl text-white uppercase font-medium text-[14px]
                        flex  items-center gap-1 transition-all duration-300 transform hover:scale-95'>
                        Contact us
                    </button>
                </a>
            </div>
            <a href="tel:08167527125">
            <div className='bg-[#bbebd3] p-10 flex justify-center gap-5 items-center rounded-2xl mt-10'>
                    <div>
                        <LuPhoneCall className='text-black text-[45px] font-light' />
                    </div>
                    <div>
                        <h4 className='font-semibold text-black text-[17px] lg:text-[18px]'>You can Call Us by Clicking</h4>
                        <p className='text-black text-[15px]'>+2348167527125</p>
                    </div>
            </div>
            </a>

          </div>
        </div>
        </div>
    </section>
  )
}

export default Faq